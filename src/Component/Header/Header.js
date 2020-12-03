import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { navigation } from "../contstant";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/operations/authOperations";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const history = useHistory();

  const logout = () => {
    dispatch(logOut(token));
  };

  useEffect(() => {
    if (token) {
      history.push(navigation.home);
    } else {
      history.push(navigation.login);
    }
  }, [token]);

  return (
    <header className={styles.mainHeader}>
      <nav className={styles.mainNav}>
        <NavLink className={styles.home} to={navigation.home}>
          MyContacts
        </NavLink>
        {token && (
          <button onClick={logout} className={styles.logoutButton}>
            LOGOUT
          </button>
        )}

        <div className={styles.singIn}>
          <NavLink className={styles.registration} to={navigation.login}>
            Login
          </NavLink>
          <NavLink className={styles.login} to={navigation.registration}>
            Registartion
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
