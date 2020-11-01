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
    // Has the lexicon been defined?
    if (!this._lexicon) {
      return wordToCheck;
    }

    if (wordToCheck.length == 0) {
      return "No Correction Found";
    }

    // get dictionary
    // invalid repeating characters
    // bad casing

    return wordToCheck;
  }
}
export default SpellChecker;
