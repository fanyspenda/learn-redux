import { Reducer, AnyAction, combineReducers } from "redux";
import { BookActionTypes } from "./types";
import { BookState } from "../../interface/Book";

const initialState: BookState = {
  data: [],
  selected: null
};

const data: Reducer<BookState["data"]> = (
  state = initialState.data,
  { type, payload }
) => {
  switch (type) {
    case BookActionTypes.CREATE: {
      return [...state, payload];
    }
    case BookActionTypes.UPDATE: {
      const newState = [...state];
      newState[payload.index] = payload.writer;
      return newState;
    }
    case BookActionTypes.DELETE: {
      return state.filter((item, index) => index !== payload);
    }
    default: {
      return state;
    }
  }
};

const selected: Reducer<BookState["selected"]> = (
  state = initialState.selected,
  { type, payload }
) => {
  return state;
};

export const bookReducer = combineReducers<BookState>({
  data,
  selected
});
