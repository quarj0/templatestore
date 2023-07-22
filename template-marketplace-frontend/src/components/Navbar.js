import React, { Fragment, useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../assets/logo.jpeg";
import SearchForm from "./Search";

const Navbar = ({ isAuthenticated }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevState) => !prevState.clicked);
  };

  const handleLogout = () => {
    // Perform logout actions, e.g., clear tokens, user data from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // Redirect to the login page
    return <Navigate to="/login" />;
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/" onClick={handleLogout}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </>
  );

  const navbarClass = clicked
    ? "navbar-collapse collapse show"
    : "navbar-collapse collapse";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleClick}
            aria-expanded={clicked ? "true" : "false"}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={navbarClass}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/templates">
                  Templates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              {isAuthenticated ? (
                // Show these links only if the user is authenticated
                <>{authLinks}</>
              ) : (
                // Show these links only if the user is not authenticated
                <>{guestLinks}</>
              )}
            </ul>
            <form className="d-flex" role="search">
              <SearchForm />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
