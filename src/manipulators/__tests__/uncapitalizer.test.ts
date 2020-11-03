import Uncapitalizer from "../uncapitalizer";

describe("Uncapitalizer", () => {
  it("should uncapitalize hyphenated words", () => {
    const mutator: Uncapitalizer = new Uncapitalizer();
    const result = mutator.manipulate("jean-pIERre");
    expect(result[0].word).toBe("jean-pierre");
    expect(result[0].distance).toBe(3);
  });
  it("should uncapitalize unhyphenated words", () => {
    const mutator: Uncapitalizer = new Uncapitalizer();
    const result = mutator.manipulate("SEATTLE");
    expect(result[0].word).toBe("seattle");
    expect(result[0].distance).toBe(7);
  });
});
