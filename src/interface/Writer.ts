export interface Writer {
  firstName: string;
  lastName: string;
  age: number;
}

export interface WriterState {
  data: Writer[];
  selected: Writer | null;
}
