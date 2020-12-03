import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/action/contactAction";
import {
  deleteContactOperation,
  getContactsOperation,
} from "../../redux/operations/taskOperations";
import styles from "./ContactList.module.css";
import "./ContactList.css";

const ContactList = ({ name, number, id }) => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteContactOperation(id, token));
    // dispatch(getContactsOperation(token));
    // dispatch(deleteContact(id));
  };;
  return (
    <li className={styles.contactList} key={id}>
      {name}: {number}
      <button className={styles.contactBtn} onClick={deleteItem} type="button">
        Delete
      </button>
    </li>
  );
};;;

export default ContactList;
