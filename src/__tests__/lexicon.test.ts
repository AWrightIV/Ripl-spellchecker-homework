import Lexicon from "../lexicon";

describe("Lexicon", () => {
  const data = `hello
world`;
  const lexicon = new Lexicon(data);

  it("should generate all of the words parsed from the initialization data", () => {
    expect(lexicon["_store"]).toMatchObject(
      new Set<string>(["hello", "world"]),
    );
  });
  it("should provide the number of generated words", () => {
    expect(lexicon.size()).toBe(2);
  });
  it("should provide lookup of all generated words", () => {
    expect(lexicon.has("world")).toBeTruthy();
    expect(lexicon.has("Wetumpka")).toBeFalsy();
  });
});
