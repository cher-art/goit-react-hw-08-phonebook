import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { navigation } from "./contstant";
import Header from "./Header/Header";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import "./App.css";

function App() {
  const token = useSelector((state) => state.token);
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push(navigation.home);
    } else {
      history.push(navigation.login);
    }
  }, [token]);

  return (
    <div className="App">
      <Header />
      <Switch>
        {token ? (
          <Route exact path={navigation.home} component={Home} />
        ) : (
          <Route path={navigation.login} component={Login} />
        )}
        <Route path={navigation.login} component={Login} />
        <Route path={navigation.registration} component={Registration} />
        <Redirect path={navigation.login} />
      </Switch>
    </div>
  );
}

export default App;
