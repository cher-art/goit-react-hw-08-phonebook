import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { editFilter } from "../../reduxTool/actionTool/filter";
import styles from "./Filter.module.css";
import "./Filter.css";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    e.preventDefault();
    const filterInputValue = e.target.value;
    dispatch(editFilter(filterInputValue));
  };

  return (
    <label>
      <input
        className={styles.mainInput}
        name="filter"
        type="text"
        onChange={inputHandler}
        value={filter}
      />
    </label>
  );
};

// class Filter extends Component {
//   render() {
//     const contactsLength = this.props.contacts.length;
//     return (
//       <CSSTransition
//         in={contactsLength > 1}
//         classNames="label"
//         timeout={500}
//         unmountOnExit
//       >
//         <label>
//           <input
//             className={styles.mainInput}
//             name="filter"
//             onChange={this.props.onHandleChange}
//             value={this.props.filter}
//           />
//         </label>
//       </CSSTransition>
//     );
//   }
// }

export default Filter;
