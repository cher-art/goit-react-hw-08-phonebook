import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { alertClose } from "../../redux/action/alertAction";
import { setContactLocalStorage } from "../../redux/action/contactAction";
import { useDispatch, useSelector } from "react-redux";
import { getContactsOperation } from "../../redux/operations/taskOperations";
import { v4 as uuidv4 } from "uuid";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import "./PhoneBook.css";

const PhoneBook = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const alert = useSelector((state) => state.isAlert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
    const persistedTasks = localStorage.getItem("contacts");
    const parseContact = JSON.parse(persistedTasks);
    if (persistedTasks) {
      dispatch(setContactLocalStorage(parseContact));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = () => {
    const filterArr = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (filterArr.length >= 1) {
      return filterArr;
    } else {
      return contacts;
    }
  };

  const closeAlert = () => {
    dispatch(alertClose());
  };

  return (
    <div className="phoneBook">
      <TransitionGroup className="alertBox" component="div">
        {alert ? (
          <CSSTransition
            classNames="alert__Box"
            mountOnEnter
            unmountOnExit
            timeout={800}
          >
            <div className="alert__Box">
              <h2>{`A contact with the same name already exists!`}</h2>
              <button onClick={closeAlert} className="alertButton">
                ok
              </button>
            </div>
          </CSSTransition>
        ) : null}
      </TransitionGroup>

      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="logo"
        unmountOnExit
      >
        <h1 className="title">PhoneBook</h1>
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="form"
        unmountOnExit
      >
        <Form />
      </CSSTransition>
      <CSSTransition
        in={filterContacts().length >= 1}
        timeout={250}
        classNames="contactTitle"
        unmountOnExit
      >
        <h2 className="findTitle">Find contacts</h2>
      </CSSTransition>
      <CSSTransition
        in={filterContacts().length >= 1}
        timeout={250}
        classNames="contactTitle"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <TransitionGroup component="ul" className="list">
        {filterContacts().map((contact) => (
          <CSSTransition classNames="list__item" timeout={800}>
            <ContactList {...contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PhoneBook;

// class PhoneBook extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//     name: "",
//     isError: false,
//     alert: false,
//     // number: '',
//   };

//   componentDidMount() {
//     const persistedTasks = localStorage.getItem("contacts");
//     if (persistedTasks) {
//       this.setState({
//         contacts: JSON.parse(persistedTasks),
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = (contact) => {
//     const arr = this.state.contacts;
//     const result = arr.some((item) => item.name.includes(contact.name));
//     result
//       ? this.setState({ alert: result })
//       : this.setState((prev) => ({
//           contacts: [...prev.contacts, { ...contact, id: uuidv4() }],
//         }));
//   };

//   deleteContact = (id) => {
//     this.setState({
//       contacts: this.state.contacts.filter((contact) => contact.id !== id),
//     });
//   };

//   filterContact = () => {
//     return this.state.contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   onSetError = () => {
//     this.setState((prev) => ({ isError: !prev.isError }));
//   };

//   closeAlert = () => {
//     this.setState({ alert: false });
//   };

//   render() {
//     const { isError } = this.state;
//     return (
//       <>
//         <TransitionGroup className="alertBox" component="div">
//           {this.state.alert ? (
//             <CSSTransition
//               classNames="alert__Box"
//               mountOnEnter
//               unmountOnExit
//               timeout={800}
//             >
//               <div className="alert__Box">
//                 <h2>{`A contact with the same name already exists!`}</h2>
//                 <button onClick={this.closeAlert} className="alertButton">
//                   ok
//                 </button>
//               </div>
//             </CSSTransition>
//           ) : null}
//         </TransitionGroup>

//         <CSSTransition
//           in={true}
//           appear={true}
//           timeout={500}
//           classNames="logo"
//           unmountOnExit
//         >
//           <h1 className="title">PhoneBook</h1>
//         </CSSTransition>
//         <CSSTransition
//           in={true}
//           appear={true}
//           timeout={1000}
//           classNames="form"
//           unmountOnExit
//         >
//           <Form
//             addContact={this.addContact}
//             isError={this.state.isError}
//             onSetError={this.onSetError}
//           />
//         </CSSTransition>
//         <CSSTransition
//           in={this.state.contacts.length > 1}
//           timeout={250}
//           classNames="contactTitle"
//           unmountOnExit
//         >
//           <h2 className="title">Find contacts</h2>
//         </CSSTransition>
//         <CSSTransition
//           in={isError}
//           classNames="notFound"
//           timeout={500}
//           unmountOnExit
//         >
//           <h2 className={styles.contactListErr}>
//             Name or Contact is not found!!!
//           </h2>
//         </CSSTransition>
//         <Filter
//           filter={this.state.filter}
//           onHandleChange={this.onHandleChange}
//           contacts={this.state.contacts}
//         />
//         {/* <CSSTransition> */}
//         <ContactList
//           contacts={
//             this.state.filter ? this.filterContact() : this.state.contacts
//           }
//           deleteContact={this.deleteContact}
//         />
//         {/* </CSSTransition> */}
//       </>
//     );
//   }
// }

// export default PhoneBook;
