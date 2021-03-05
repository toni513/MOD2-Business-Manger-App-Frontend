import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <div className="container">
          <Link className="navbar-brand" to="/">
            EZManager 
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/signup" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/signup">
                  Join
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/signin" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/signin">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);