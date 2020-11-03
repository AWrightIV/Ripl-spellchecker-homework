export interface ManipulatorProps {
  word: string;
  distance: number;
}

export interface ManipulatorInterface {
  manipulate(word: string): ManipulatorProps[];
}
