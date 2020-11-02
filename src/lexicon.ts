// Lexicon is a class for looking up whether a given string corresponds with a valid word
class Lexicon {
  // Unique collection of all words in the data set
  private _store: Set<string>;

  // Collection of capitalization variants for each case-insensitive word
  private _capitalizations: Map<string, Set<string>>;

  constructor(data: string) {
    const wordList = data.split("\n");
    // With a less curated data input, it would be more reliable to match the words instead
    // const wordList = data.match("/\b([-w]+)\b/g");

    this._store = new Set<string>(wordList);
  }

  size(): number {
    return this._store.size;
  }

  has(wordToCheck: string): boolean {
    return this._store.has(wordToCheck);
  }
}
export default Lexicon;
