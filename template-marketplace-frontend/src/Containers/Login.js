import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import CSRFToken from "../components/CSRFToken";

const Login = ({ login, isAuthenticated }) => {
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    try {

      axios.post(`${process.env.REACT_APP_API_URL}/account/login`, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        login();
      })
      .catch((err) => {
        console.log(err);
      });

      
    } catch (err) {
      console.log(err);
    }
  };

    if (isAuthenticated) {
      
    return <Navigate to="/template" />; 
    }
  return (
      <div className="container mt-auto">
        <h1 className="title">Login to your account</h1>
        <p className="text-body-secondary">
          Sign into your template account to explore more.
        </p>
        <form className="row g-3" onSubmit={(e) => onSubmit(e)}>
          <CSRFToken />
          <div className="col-md-4">
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend3">
                @
              </span>
              <input
                type="text"
                name="username"
                className="form-control is-valid"
                id="validationServer01"
                onChange={(e) => onChange(e)}
                placeholder="username"
                value={username}
                required
              />
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
               Enter your username
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <input
              type="password"
              name="password"
              className="form-control is-valid"
              id="validationServer01"
              onChange={(e) => onChange(e)}
              placeholder="password"
              value={password}
              required
              minLength={6}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
        <p className="mt-3">
          Don't have an account? <Link to={"/signup"}>Create Account</Link>
        </p>
      </div>

  );
};

export default Login;
