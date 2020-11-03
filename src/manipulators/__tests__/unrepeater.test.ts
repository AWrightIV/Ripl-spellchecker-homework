import Unrepeater from "../unrepeater";
import { ManipulatorProps } from "../../interfaces/manipulator";

describe("Unrepeater", () => {
  it("should find a correct spelling candidate from words that have repeated characters", () => {
    const mutator: Unrepeater = new Unrepeater();
    const result = mutator.manipulate("coffeee");
    let match: ManipulatorProps;
    result.filter((cand) => {
      if (cand.word === "coffee") {
        match = cand;
      }
    });
    expect(match).toMatchObject({ word: "coffee", distance: 1 });
  });
});
