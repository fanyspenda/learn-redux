export interface Book {
  title: string;
  publishYear: number;
  edition: number;
}

export interface BookState {
  data: Book[];
  selected: Book | null;
}
