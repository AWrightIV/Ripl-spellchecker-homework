import { ManipulatorInterface, ManipulatorProps } from "../interfaces/manipulator";

export default class Uncapitalizer implements ManipulatorInterface {
  manipulate(word: string): ManipulatorProps[] {
    const capitals: number = word.replace(/[a-z-]+/g, "").length;

    return [
      {
        word: word.toLowerCase(),
        distance: capitals,
      },
    ];
  }
}
