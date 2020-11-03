import { ManipulatorInterface, ManipulatorProps } from "../interfaces/manipulator";

interface UnrepeaterNode {
  character: string;
  repeats: number;
}

export default class Unrepeater implements ManipulatorInterface {
  manipulate(word: string): ManipulatorProps[] {
    if (!word || word.length <= 1) {
      // The parameter is nullish or there can't be repetitions
      return [];
    }

    const charactersByRepetitions = this._countRepetitions(word);
    return this._generateCandidates(charactersByRepetitions);
  }

  // Build a version of the word that collapses and counts all repetitions, e.g.:
  //  pizza = [ p: 1, i: 1, z: 2, a: 1 ]
  //  coffee= [ c: 1, o: 1, f: 2, e: 2 ]
  private _countRepetitions(word: string): UnrepeaterNode[] {
    const charactersByRepetitions: UnrepeaterNode[] = [];
    // Start to track the first character
    let node: UnrepeaterNode = {
      character: word.charAt(0),
      repeats: 1,
    };

    for (let i = 1; i < word.length; i++) {
      const char = word[i];
      if (char === node.character) {
        node.repeats += 1;
      } else {
        charactersByRepetitions.push(node);
        node = {
          character: char,
          repeats: 1,
        };
      }
    }

    // Add the last character
    charactersByRepetitions.push(node);
    return charactersByRepetitions;
  }

  // Generate all permutations of the repeated characters
  private _generateCandidates(wordRep: UnrepeaterNode[]): ManipulatorProps[] {
    let candidates: ManipulatorProps[] = [];
    let newCandidates: ManipulatorProps[] = [];

    // Add a version for each repetition count of the first character no greater than three
    // No word in English contains the same character repeated four times
    const firstChar = wordRep[0];
    for (let i = 1; i <= firstChar.repeats && i <= 3; i++) {
      candidates.push({
        word: firstChar.character.repeat(i),
        distance: firstChar.repeats - i,
      });
    }

    // Remaining characters
    // For a word aall, we would come into this loop with two candidates:
    //  a
    //  aa
    for (let i = 1; i < wordRep.length; i++) {
      const char = wordRep[i];
      for (let j = 1; j <= char.repeats && j <= 3; j++) {
        candidates.forEach((cand) => {
          // Here, we would expand the above to these candidates:
          //  al, all, aal, aall
          newCandidates.push({
            word: cand.word + char.character.repeat(j),
            distance: cand.distance + (char.repeats - j),
          });
        });
      }
      candidates = newCandidates;
      newCandidates = [];
    }

    return candidates;
  }
}
