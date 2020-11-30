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
    const result = await axios.get(`http://localhost:5000/contacts`);
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
    await axios.post(`http://localhost:5000/contacts`, contact, options);
  } catch (error) {
    dispatch(setError("Оууууу, щось сталось =D"));
  } finally {
    dispatch(loaderOff());
  }
};

export const deleteContactOperation = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setError("Оууууу, щось сталось =D"));
  } finally {
    dispatch(loaderOff());
  }
};
