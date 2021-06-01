import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./screens/Home";
import Privacy from "./screens/Privacy";
import TermsandConditions from "./screens/TermsandConditions";
import "./style/main.css";
import "./style/navbar.css";

const App = () => (
  <Router>
    <div className="container">
      <ul className="navbar">
        <li className="navbar_item">
          <NavLink to="/" activeClassName="nav">
            Home
          </NavLink>
        </li>
        <li className="navbar_item">
          <NavLink to="/terms-and-conditions" activeClassName="nav">
            Privacy
          </NavLink>
        </li>
        <li className="navbar_item">
          <NavLink to="/privacy" activeClassName="nav">
            Terms and Conditions
          </NavLink>
        </li>
      </ul>
    </div>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/terms-and-conditions">
        <Privacy />
      </Route>
      <Route path="/privacy">
        <TermsandConditions />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.getElementById("root"));
