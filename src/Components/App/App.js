import React from "react";
import "./App.css";
import Login from "../Login/Login";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHotelPrice } from "../Redux/actions";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      setLoggedIn(true);
    } else if (!jwt) {
      setLoggedIn(false);
    }
  }, []);

  function dateCalculation(days) {
    const today = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ).getTime();
    const nextDay = new Date(today + 86400000 * days);
    const month =
      nextDay.getMonth() + 1 < 10
        ? "0" + (nextDay.getMonth() + 1)
        : nextDay.getMonth() + 1;
    const checkOut =
      nextDay.getFullYear() + "-" + month + "-" + nextDay.getDate();
    return checkOut;
  }

  function formLogin() {
    localStorage.setItem("jwt", "test-token");
    history.push("/");
  }

  function formSearch(date, days, location) {
    dispatch(getHotelPrice(date, dateCalculation(days), location, days));
  }

  function logout() {
    localStorage.removeItem("jwt");
    history.push("/login");
  }

  return (
    <div className="page">
      <Switch>
        <Route path="/login">
          <Login formSubmit={formLogin} />
        </Route>
        <ProtectedRoute
          exact
          path="/"
          type={loggedIn}
          component={Main}
          logout={logout}
          formSubmit={formSearch}
          dateCalculation={dateCalculation}
        />
      </Switch>
    </div>
  );
}

export default App;
