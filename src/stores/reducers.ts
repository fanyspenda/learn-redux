import { combineReducers } from "redux";
import { RootState } from "../interface/Root";
import { bookReducer } from "./book/reducers";
import { writerReducer } from "./writer/reducers";

export const rootReducer = combineReducers<RootState>({
  book: bookReducer,
  writer: writerReducer
});
