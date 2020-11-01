import Lexicon from "../lexicon";
import SpellChecker from "../spellchecker";

describe("SpellChecker", () => {
  const lexicon = new Lexicon("Wetumpka\
Parnassus\
table\
really\
bath\
Bath\
Jean-Pierre\
bossship");
  const spellCheck = new SpellChecker(lexicon);

  it("should return the correctly capitalized word for a lowercase proper noun", () => {
    expect(spellCheck.checkWord("wetumpka")).toBe("Wetumpka");
  });
  it("should return the correctly capitalized word for a mixed cased proper noun", () => {
    expect(spellCheck.checkWord("paRNAssus")).toBe("Parnassus");
  });
  it("should return the correctly uncapitalized word for a capitalized common noun", () => {
    expect(spellCheck.checkWord("Table")).toBe("table");
  });
  it("should return the closer correct word when the same spelling is valid with two capitalizations", () => {
    expect(spellCheck.checkWord("bAth")).toBe("bath"); // bath is 1 edit away and Bath is 2 edits away
    expect(spellCheck.checkWord("BATH")).toBe("Bath"); // bath is 4 edits away and Bath is 3 edits away
  });
  it("should return a correctly capitalized word for a hyphenated proper noun", () => {
    expect(spellCheck.checkWord("jean-pierre")).toBe("Jean-Pierre");
  });
  it("should return a corrected word when characters have been repeated too many times", () => {
    expect(spellCheck.checkWord("tabble")).toBe("table");
    expect(spellCheck.checkWord("rrreally")).toBe("really");
  });
  it("should return the original word if the incoming word is already correct", () => {
    // valid words with more than two consecutive letters:
    //  bossship
    //  demigoddessship
    //  goddessship
    //  headmistressship
    //  patronessship
    //  wallless
    //  whenceeer
    expect(spellCheck.checkWord("bossship")).toBe("bossship");
  });
  it("should return 'No Correction Found' if the word is zero length", () => {
    expect(spellCheck.checkWord("")).toBe("No Correction Found");
  });
});
