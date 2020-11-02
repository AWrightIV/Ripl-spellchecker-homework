import Lexicon from "./lexicon";

class SpellChecker {
  private _lexicon: Lexicon;

  constructor(words: Lexicon) {
    this._lexicon = words;
  }

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

  private _correctSpelling(wordToCorrect: string): string | undefined {
    return undefined;
  }

  private _capitalize(wordToCapitalize: string): Array<string | number> {
    let capitalized: string;
    return [capitalized, 0];
  }
}

export default SpellChecker;
