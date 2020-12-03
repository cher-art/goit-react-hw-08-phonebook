import axios from "axios";
import { setError, resetError } from "../action/errorAction";
import { loaderOn, loaderOff } from "../action/loaderAction";
import {
  setContactLocalStorage,
  addConct,
  deleteContact,
  setContact,
} from "../action/contactAction";
import { resetToken, setToken } from "../action/tokenAction";

const options = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },

});

export const getContactsOperation = (token) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.get(
      `https://goit-phonebook-api.herokuapp.com/contacts`,
      options(token)
    );
    dispatch(setContact(result.data));
  } catch (error) {
    dispatch(setError("Оууууу, щось сталось =D"));
  } finally {
    dispatch(loaderOff());
  }
};

export const postContactsOperations = (contact, token) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      `https://goit-phonebook-api.herokuapp.com/contacts`,
      contact,
      options(token)
    );
  } catch (error) {
    dispatch(setError("Оууууу, щось сталось =D"));
  } finally {
    dispatch(loaderOff());
  }
};

export const deleteContactOperation = (ContactId, token) => async (
  dispatch
) => {
  try {
    await axios.delete(
      `https://goit-phonebook-api.herokuapp.com/contacts/${ContactId}`,
      options(token)
    );
    dispatch(deleteContact(ContactId));
  } catch (error) {
    dispatch(setError("Оууууу, щось сталось =D"));
  } finally {
    dispatch(loaderOff());
  }
};
