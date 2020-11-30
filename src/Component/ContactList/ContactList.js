import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/action/contactAction";
import { deleteContactOperation } from "../../redux/operations/taskOperations";
import styles from "./ContactList.module.css";
import "./ContactList.css";

const ContactList = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteContactOperation(id));
    dispatch(deleteContact(id));
  };
  return (
    <li className={styles.contactList} key={id}>
      {name}: {number}
      <button className={styles.contactBtn} onClick={deleteItem} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactList;
