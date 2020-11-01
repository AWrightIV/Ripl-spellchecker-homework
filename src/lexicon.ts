// Lexicon is a class for looking up whether a given string corresponds with a valid word
class Lexicon {
  private _store: Set<string>;

  constructor(data: string) {
    this._store = new Set<string>();
    // TODO: for each substring in data separated by newline, add entry
  }
}
export default Lexicon;
