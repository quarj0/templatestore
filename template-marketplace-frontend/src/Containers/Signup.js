import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import CSRFToken from "../components/CSRFToken";
import axios from "axios";



const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [accountCreated, setAccountedCreated] = useState(false);

  const { username, email, password } = formData;

const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      toast("All fields are required!");
    } else if (password.length < 6) {
      // use 'length' instead of '<'
      toast("Password is too short.");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/account/register`,
          {
            username,
            email,
            password,
          }
        );

        // Check if registration is successful (you can customize this based on your backend response)
        if (response.status === 201) {
          toast("Account created successfully!");
          setAccountedCreated(true);
        } else {
          // Handle registration error (e.g., show an error message)
          toast("Something went wrong!");
        }
      } catch (error) {
        // Handle any errors from the API request
        console.error("Registration failed:", error);
        // Handle registration error (e.g., show an error message)
      }
      

      if (accountCreated) {
        navigate("/login");
      }

    }
  };

  return (
    <div className="container mt-auto form-control row g-1 align-items-center">
      <h1 className="text-center">Sign up</h1>
      <p className="text-body-secondary">
        Sign up to get the latest template uploads and news!
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
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <input
            type="email"
            name="email"
            className="form-control is-valid"
            id="validationServer01"
            onChange={(e) => onChange(e)}
            placeholder="email"
            value={email}
            required
          />
          <div className="valid-feedback">Looks good!</div>
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
            Create Account
          </button>
        </div>
      </form>
      <p className="mt-3">
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default Register;
