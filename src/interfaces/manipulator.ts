export interface ManipulatorProps {
  word: string;

  // This is currently not tracking a Levenshtein Distance, but the count of edits to the word
  // needing correction. I opted not to implement this up front because with the two kinds of edits
  // we're currently concerned about, we can get correct answers without it.
  distance: number;
}

export interface ManipulatorInterface {
  manipulate(word: string): ManipulatorProps[];
}
