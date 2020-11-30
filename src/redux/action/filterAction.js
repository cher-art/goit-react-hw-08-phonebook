import { EDIT_FILTER } from "../ducks/index";

export const editFilter = (text) => ({
  type: EDIT_FILTER,
  payload: text,
});
