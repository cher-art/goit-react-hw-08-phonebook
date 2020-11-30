import { LOADER_ON, LOADER_OFF } from "../operationsTaskConstant/index";
const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return true;
    case LOADER_OFF:
      return false;
    default:
      return state;
  }
};
