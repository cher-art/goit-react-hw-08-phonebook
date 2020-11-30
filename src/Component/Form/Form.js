import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/action/contactAction";
import { alertOpen } from "../../redux/action/alertAction";
import {
  getContactsOperation,
  postContactsOperations,
} from "../../redux/operations/taskOperations";
import styles from "./Form.module.css";

const initialState = {
  name: "",
  number: "",
};

const Form = () => {
  const [data, setData] = useState(initialState);
  const { name, number } = data;
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const onHandleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      return;
    }
    const singleContact = {
      name,
      number,
    };
    if (contacts.some((contact) => contact.name === singleContact.name)) {
      dispatch(alertOpen());
    } else {
      dispatch(postContactsOperations(singleContact));
      dispatch(addContact(singleContact));
      setData(initialState);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={onHandleSubmit}>
      <label className={styles.mainLabel}>
        Name
        <input
          className={styles.mainInput}
          onChange={onHandleChange}
          name="name"
          value={name}
        />
      </label>
      <label className={styles.mainLabel}>
        Number
        <input
          className={styles.mainInput}
          onChange={onHandleChange}
          name="number"
          value={number}
        />
      </label>
      <button className={styles.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;

// class Form extends Component {
//   state = {
//     ...initialState,
//   };

//   onHandleChange = (e) => {
//     this.props.isError && this.props.onSetError();
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.state.name === "" || this.state.number === ""
//       ? this.props.onSetError()
//       : this.props.addContact({ ...this.state });
//     this.setState({ ...initialState });
//   };

//   render() {
//     return (
//       <form className={styles.contactForm} onSubmit={this.onHandleSubmit}>
//         <label className={styles.mainLabel}>
//           Name
//           <input
//             className={styles.mainInput}
//             onChange={this.onHandleChange}
//             name="name"
//             value={this.state.name}
//           />
//         </label>
//         <label className={styles.mainLabel}>
//           Number
//           <input
//             className={styles.mainInput}
//             onChange={(e) => this.onHandleChange(e)}
//             name="number"
//             value={this.state.number}
//           />
//         </label>
//         <button className={styles.formBtn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;
