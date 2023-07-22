import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_enc0l1r",
        "template_dattxhk",
        e.target,
        "guidemelearn.info@gmail.com"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container-fluid">
      <h5 className="card-title text-center">Your feedbacks</h5>
      <p className="text-body-secondary">Your feedback means a lot to us. And also your suggesstions.</p>
      <p className="text-body-secondary">We're always availableto respond to your feedbacks.</p>
      <form className="form-control" onSubmit={handleSubmit}>
        <label className="form-label">
          Name
          <input
            className="form-text"
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Email
          <input
            className="form-text-center"
            type="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="form-control-plaintext">
          Message
          <textarea
            className="form-multiline"
            autoCorrect="true"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
