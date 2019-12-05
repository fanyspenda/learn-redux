import { Reducer, AnyAction, combineReducers } from "redux";
import { WriterState } from "../../interface/Writer";
import { WriterActionTypes } from "./types";

const initialState: WriterState = {
  data: [],
  selected: null
};

const data: Reducer<WriterState["data"]> = (
  state = initialState.data,
  { type, payload }
) => {
  switch (type) {
    case WriterActionTypes.CREATE: {
      return [...state, payload];
    }
    case WriterActionTypes.UPDATE: {
      const newState = [...state];
      newState[payload.index] = payload.writer;
      return newState;
    }
    case WriterActionTypes.DELETE: {
      return state.filter((item, index) => index !== payload);
    }
    default: {
      return state;
    }
  }
};

const selected: Reducer<WriterState["selected"]> = (
  state = initialState.selected,
  { type, payload }
) => {
  return state;
};

export const writerReducer = combineReducers<WriterState>({
  data,
  selected
});
