import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setaddress] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    // Fetch the user's current profile data and populate the form
    axios
      .get(`${process.env.REACT_APP_API_URL}/account/user/profile`)
      .then((response) => {
        const {
          first_name,
          last_name,
          email,
          username,
          phone,
          city,
          address,
          profilePicture,
        } = response.data;
        setFirstName(first_name);
        setLastName(last_name);
        setEmail(email);
        setUsername(username);
        setPhone(phone);
        setCity(city);
        setaddress(address);
        setProfilePicture(profilePicture);
      })
      .catch((error) => {
        toast("Failed to fetch profile data. Please try again.");
      });
  }, []);

  const handleUpdateProfile = () => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/account/update/profile`, {
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        phone: phone,
        city: city,
        address: address,
        profilePicture: profilePicture,
      })
      .then((response) => {
        toast("Profile updated successfully.");
      })
      .catch((error) => {
        toast(
          "An error occurred while updating the profile. Please try again."
        );
      });
  };

  return (
    <div className="container mt-4">
      <h2>Update Profile</h2>
      <form>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Profile Picture:</label>
          <input
            type="file"
            className="form-control"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdateProfile}
        >
          Update
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default UpdateProfile;
