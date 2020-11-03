import * as fs from "fs";
import Lexicon from "./lexicon";
import SpellChecker from "./SpellChecker";

export function spellcheckDemoAsync(wordToCheck: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile("words.txt", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lexicon = new Lexicon(data);
        const spellCheck = new SpellChecker(lexicon);
        const result: string = spellCheck.checkWord(wordToCheck);
        resolve(result);
      }
    });
  });
}
