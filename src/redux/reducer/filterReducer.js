import { EDIT_FILTER } from "../mainConstant/index";

const initialState = "";

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FILTER:
      return action.payload;
    default:
      return state;
  }
};
