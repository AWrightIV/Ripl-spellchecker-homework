import Lexicon from "./lexicon";
import { ManipulatorProps, ManipulatorInterface } from "./interfaces/manipulator";
import Capitalizer from "./manipulators/capitalizer";
import Uncapitalizer from "./manipulators/uncapitalizer";
import Unrepeater from "./manipulators/unrepeater";

/*
  Correct two kinds of errors on the incoming word and then return the corrected word:
    Fix bad casing
      “wetumpka” → “Wetumpka”
      “paRNAssus” → “Parnassus”
    Remove invalid repeating characters
      “tabble” → “table”
      “rrreally” → “really”
    If the incoming word is already correct, return the original word.
    If the incoming word is not correct and no correction can be found, return “No Correction Found”.
*/
export default class SpellChecker {
  private _lexicon: Lexicon;

  constructor(words: Lexicon) {
    this._lexicon = words;
  }

  checkWord(wordToCheck: string): string {
    if (!this._lexicon) {
      return "No valid words. Please initialize.";
    }

    if (wordToCheck.length == 0) {
      return "No Correction Found";
    }

    const exactMatch = this._lexicon.has(wordToCheck);
    if (exactMatch) {
      return wordToCheck;
    }

    const correctSpelling = this._correctSpelling(wordToCheck);
    if (correctSpelling) {
      return correctSpelling;
    }

    return "No Correction Found";
  }

  // Use manipulator objects to change the word provided. Test those against the valid word list.
  private _correctSpelling(wordToCorrect: string): string | undefined {
    const unrepeater = new Unrepeater();
    const urCandidates: ManipulatorProps[] = unrepeater.manipulate(wordToCorrect);

    // Capitalization and uncapitalization generate only one candidate each. There are exceptions within
    // proper nouns that will be missed, but they aren't in the current data set.
    const manipulators: ManipulatorInterface[] = [new Capitalizer(), new Uncapitalizer()];
    const candidates: ManipulatorProps[] = [];
    manipulators.forEach((manip) => {
      urCandidates.forEach((cand) => {
        const results: ManipulatorProps[] = manip.manipulate(cand.word);
        results.forEach((res) => {
          if (this._lexicon.has(res.word)) {
            res.distance += cand.distance;
            candidates.push(res);
          }
        });
      });
    });

    if (candidates.length > 0) {
      // The sort will be a no-op in the case that the array is one candidate long
      candidates.sort((a, b) => {
        return a.distance - b.distance;
      });
      // This decision could definitely be more nuanced if we had more kinds of errors to worry about.
      // Currently, no ambiguity is possible.
      return candidates[0].word;
    }

    return undefined;
  }
}
