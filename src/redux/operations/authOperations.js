import axios from "axios";
import { setError, resetError } from "../action/errorAction";
import { loaderOn, loaderOff } from "../action/loaderAction";
import { resetToken, setToken } from "../action/tokenAction";

export const registeredOperation = (userData) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      "https://goit-phonebook-api.herokuapp.com/users/signup",
      userData
    );
    console.log(result);
    dispatch(setToken(result.data.token));
  } catch (error) {
    dispatch(setError("bad request!"));
  } finally {
    dispatch(loaderOff());
  }
};

export const loginOperation = (userData) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      "https://goit-phonebook-api.herokuapp.com/users/login",
      userData
    );
    // console.log(result);
    dispatch(setToken(result.data.token));
  } catch (error) {
    dispatch(setError("bad request!"));
  } finally {
    dispatch(loaderOff());
  }
};

export const logOut = (token) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios({
      url: "https://goit-phonebook-api.herokuapp.com/users/logout",
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(resetToken());
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(loaderOff());
  }
};

axios({
  url: "",
  method: "post",
  header: {
    "Content-type": "application/json",
  },
});
