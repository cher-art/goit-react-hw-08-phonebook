import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navigation } from "../../contstant";
import { loginOperation } from "../../../redux/operations/authOperations";
import styles from "./Login.module.css";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHeandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(loginOperation(form));
  };

  return (
    <div>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.loginForm} onSubmit={submit}>
        <input
          onChange={inputHeandler}
          type="email"
          name="email"
          placeholder="email"
        ></input>
        <input
          onChange={inputHeandler}
          type="password"
          name="password"
          placeholder="password"
        ></input>
        <button type="submit">Login</button>
        <p>
          If you already have an account please{" "}
          <NavLink to={navigation.registration}>Registered</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
