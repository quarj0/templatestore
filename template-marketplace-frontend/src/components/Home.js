import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Home.css";

function Home() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/templates}`)
      .then((res) => {
        setTemplates(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homepage">
      <header className="header">
        <h1>TemplateSite</h1>
        <p>Find, buy, and sell creative templates for all your projects!</p>
        <Link to="/signup" className="cta-button">
          Get Started
        </Link>
      </header>
      <section className="features">
        <div className="feature">
          <i className="fas fa-search"></i>
          <h2>Discover Templates</h2>
          <p>
            Explore our vast collection of templates across various categories.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-shopping-cart"></i>
          <h2>Buy Premium Templates</h2>
          <p>Get access to high-quality premium templates for your projects.</p>
        </div>
        <div className="feature">
          <i className="fas fa-upload"></i>
          <h2>Sell Your Templates</h2>
          <p>Share your creative designs with the world and earn from sales.</p>
        </div>
      </section>
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Join our community today and take advantage of the many features
          Template Shop offers!
        </p>
        <Link to="/signup" className="cta-button"></Link>
      </section>
      <div className="card">
        <h1>Browse</h1>
        <div className="card mb-3">
          {templates.map((template) => (
            <div key={template.id}>
              <img
                src={template.image}
                alt={template.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">{template.title}</h3>
                <p className="card-text">{template.description}</p>
                <p className="card-text">
                  {" "}
                  <small className="text-body-secondary">
                    {" "}
                    Category: {template.category}{" "}
                  </small>{" "}
                </p>
                <p className="card-text">
                  {" "}
                  <small className="text-body-secondary">
                    Created At: {template.created_at}
                  </small>{" "}
                </p>
                <a
                  className="btn btn-primary"
                  href={`${process.env.REACT_APP_API_URL}/template/list}`}
                >
                  Get Template
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
