import { ManipulatorInterface, ManipulatorProps } from "../interfaces/manipulator";

export default class Capitalizer implements ManipulatorInterface {
  // Perform capitalization with support for hyphenation
  manipulate(word: string): ManipulatorProps[] {
    // Capitalize each substring separated by a hyphen
    const working: Array<string> = [];
    let changes = 0;

    const split: Array<string> = word.split("-");

    split.forEach((substring) => {
      const inlineLowerResult = this._inlineCapitalsToLower(substring);
      const capitalizeResult = this._capitalize(inlineLowerResult.word);
      working.push(capitalizeResult.word);
      changes += inlineLowerResult.distance + capitalizeResult.distance;
    });

    if (changes === 0) {
      return [];
    }

    // We could also generate some known alternate capitalizations for proper nouns, e.g.: McDonald, etc...
    // None of those are included in the data set for this project, but it could either be included with
    // this set of results or with an alternate ManipulatorInterface class
    return [
      {
        word: working.join("-"),
        distance: changes,
      },
    ];
  }

  // Capitalize the argument. Assume there is no hyphenation
  private _capitalize(substring: string): ManipulatorProps {
    if (/^[A-Z]/g.test(substring)) {
      // Already capitalized. No change.
      return {
        word: substring,
        distance: 0,
      };
    }
    return {
      word: substring.charAt(0).toUpperCase() + substring.slice(1),
      distance: 1,
    };
  }

  // Lowercase all letters of the argument after the first. Assume there is no hyphenation
  private _inlineCapitalsToLower(substring: string): ManipulatorProps {
    const working: string = substring.slice(1);
    // There is no need to remove hyphens from this set before counting
    const capitals: number = working.replace(/[a-z]+/g, "").length;
    if (capitals === 0) {
      return {
        word: substring,
        distance: 0,
      };
    }
    return {
      word: substring.charAt(0) + working.toLowerCase(),
      distance: capitals,
    };
  }
}
