import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { navigation } from "../../contstant";
import { registeredOperation } from "../../../redux/operations/authOperations";
import styles from "./Registration.module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHeandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(registeredOperation(form));
  };

  return (
    <div>
      <h1 className={styles.title}>Registration</h1>
      <form className={styles.registrationForm} onSubmit={submit}>
        <input
          onChange={inputHeandler}
          type="text"
          name="name"
          placeholder="username"
          value={form.name}
        ></input>
        <input
          onChange={inputHeandler}
          type="text"
          name="email"
          placeholder="email"
          value={form.email}
        ></input>
        <input
          onChange={inputHeandler}
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
        ></input>
        <button type="submit">Sing UP</button>
        <p>
          If you already have an account please
          <NavLink to={navigation.login}>login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Registration;
