import axios from "axios";
import { setError, resetError } from "../action/errorAction";
import { loaderOn, loaderOff } from "../action/loaderAction";
import {
  setContactLocalStorage,
  addConct,
  deleteContact,
  setContact,
} from "../action/contactAction";

const options = {
  header: {
    "Content-type": "application/json",
  },
};

export const getContactsOperation = () => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.get(
      `https://goit-phonebook-api.herokuapp.com/contacts`
    );
    console.dir(result);
    dispatch(setContact(result.data));
  } catch (error) {
    dispatch(setError("Оууууу, щось сталось =D"));
  } finally {
    dispatch(loaderOff());
  }
};

export const postContactsOperations = (contact) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    await axios.post(
      `https://goit-phonebook-api.herokuapp.com/contacts`,
      contact,
      options
    );
  } catch (error) {
    dispatch(setError("Оууууу, щось сталось =D"));
  } finally {
    dispatch(loaderOff());
  }
};

export const deleteContactOperation = (contactId) => async (dispatch) => {
  try {
    await axios.delete(
      `https://goit-phonebook-api.herokuapp.com/contacts/${contactId}`
    );
    dispatch(deleteContact(contactId));
  } catch (error) {
    dispatch(setError("Оууууу, щось сталось =D"));
  } finally {
    dispatch(loaderOff());
  }
};
