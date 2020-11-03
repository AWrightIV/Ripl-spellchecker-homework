import Lexicon from "../lexicon";

describe("Lexicon", () => {
  const data = `Wetumpka
Parnassus
table
really
bath
Bath
Jean-Pierre
bossship
write
writee`;
  const lexicon = new Lexicon(data);

  it("should generate all of the words parsed from the initialization data", () => {
    expect(lexicon["_store"]).toMatchObject(
      new Set<string>([
        "Wetumpka",
        "Parnassus",
        "table",
        "really",
        "bath",
        "Bath",
        "Jean-Pierre",
        "bossship",
        "write",
        "writee",
      ]),
    );
  });
  it("should provide the number of generated words", () => {
    expect(lexicon.size()).toBe(10);
  });
  it("should provide lookup of all generated words", () => {
    expect(lexicon.has("Wetumpka")).toBeTruthy();
    expect(lexicon.has("Parnassus")).toBeTruthy();
    expect(lexicon.has("table")).toBeTruthy();
    expect(lexicon.has("really")).toBeTruthy();
    expect(lexicon.has("bath")).toBeTruthy();
    expect(lexicon.has("Bath")).toBeTruthy();
    expect(lexicon.has("Jean-Pierre")).toBeTruthy();
    expect(lexicon.has("bossship")).toBeTruthy();
    expect(lexicon.has("write")).toBeTruthy();
    expect(lexicon.has("writee")).toBeTruthy();
  });
  it("should not falsely claim any other words were generated", () => {
    expect(lexicon.has("hello")).toBeFalsy();
    expect(lexicon.has("world")).toBeFalsy();
  });
});
