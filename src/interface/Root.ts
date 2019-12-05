import { BookState } from "./Book";
import { WriterState } from "./Writer";

export interface RootState {
  book: BookState;
  writer: WriterState;
}
