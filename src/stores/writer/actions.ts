import { WriterActionTypes } from "./types";
import { Writer } from "../../interface/Writer";

export const createWriter = (writer: Writer) => {
  return {
    type: WriterActionTypes.CREATE,
    payload: writer
  };
};

export const updateWriter = (writer: Writer, index: number) => {
  return {
    type: WriterActionTypes.UPDATE,
    payload: { index, writer }
  };
};

export const deleteWriter = (index: number) => {
  return {
    type: WriterActionTypes.DELETE,
    payload: index
  };
};
