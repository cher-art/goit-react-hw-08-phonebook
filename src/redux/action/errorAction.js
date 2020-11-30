import { RESET_ERROR, SET_ERROR } from "../operationsTaskConstant/index";

export const setError = (text) => ({
  type: SET_ERROR,
  payload: text,
});

export const resetError = () => ({
  type: RESET_ERROR,
});
