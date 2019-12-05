import { BookActionTypes } from "./types";
import { Book } from "../../interface/Book";

//untuk membantu mengingat action type dan payloads
export const createWriter = (book: Book) => {
  return {
    type: BookActionTypes.CREATE,
    payload: book
  };
};

export const updateWriter = (book: Book, index: number) => {
  return {
    type: BookActionTypes.UPDATE,
    payload: { index, book }
  };
};

export const deleteWriter = (index: number) => {
  return {
    type: BookActionTypes.DELETE,
    payload: index
  };
};
