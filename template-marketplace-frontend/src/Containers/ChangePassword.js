import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/account/change/password`, {
        password: currentPassword,
        new_password: newPassword,
      })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(
          "An error occurred while changing password. Please try again."
        );
      });
  };

  return (
    <div className="card">
      <h2 className="card-title">Change Password</h2>
      <div>
        <label className="form-label">Current Password:</label>
        <input
        className="form-control"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="card-title">
        <label className="form-label">New Password:</label>
        <input
        className="form-control"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button onClick={handleChangePassword} className="btn btn-default">Change Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
