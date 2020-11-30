import { RESET_ERROR, SET_ERROR } from '../constant/index'

const initialState = "";

export default (state = initialState, action) => {
  switch (state.type) {
    case SET_ERROR:
      return action.payload
    case RESET_ERROR:
      return ''
    default:
        return state;;
  }
}