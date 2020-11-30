import { EDIT_FILTER, CHANGE_FILTER } from "../ducksTool";
import { createReducer } from "@reduxjs/toolkit";

const initialState = " ";

export default createReducer(initialState, {
  [EDIT_FILTER]: (state, action) => action.payload,
  [CHANGE_FILTER]: (state, action) => action.payload,
});
