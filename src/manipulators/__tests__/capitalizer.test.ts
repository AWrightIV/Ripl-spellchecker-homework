import Capitalizer from "../capitalizer";

describe("Capitalizer", () => {
  it("should capitalize hyphenated words", () => {
    const mutator: Capitalizer = new Capitalizer();
    const result = mutator.manipulate("jean-pierre");
    expect(result[0].word).toBe("Jean-Pierre");
    expect(result[0].distance).toBe(2);
  });
  it("should capitalize unhyphenated words", () => {
    const mutator: Capitalizer = new Capitalizer();
    const result = mutator.manipulate("seattle");
    expect(result[0].word).toBe("Seattle");
    expect(result[0].distance).toBe(1);
  });
  it("should properly capitalize mixed-case words", () => {
    const mutator: Capitalizer = new Capitalizer();
    const result = mutator.manipulate("bOSTon");
    expect(result[0].word).toBe("Boston");
    expect(result[0].distance).toBe(4);
  });
});
