import React, { useState } from 'react';
import axios from 'axios';

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeEmail = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/account/change/email`, {
        new_email: newEmail,
        password,
      })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage("An error occurred while changing email. Please try again.");
      });
  };

  return (
    <div className='card'>
      <h2 className='card-text'>Change Email</h2>
      <div>
        <label className='label-primary'>New Email:</label>
        <input className='form-text' type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
      </div>
      <div>
        <label className='label-primary'>Password:</label>
        <input className='form-actions' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleChangeEmail} className='btn btn-primary'>Change Email</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangeEmail;
