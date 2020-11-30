import { ALERT_ON, ALERT_OFF } from "../mainConstant/index";

const initilState = false;

export const isAlert = (state = initilState, action) => {
  switch (action.type) {
    case ALERT_ON:
      return true;
    case ALERT_OFF:
      return false;
    default:
      return state;
  }
};
