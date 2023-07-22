import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/templates/search/?query=${query}`)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="search">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="search"
          aria-label="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-outline-success">
          Search
        </button>
      </form>

      {results.map((template) => (
        <div key={template.id} className="card">
          <h3 className="title">{template.title}</h3>
          <img className="card-img" src={template.image} alt="template-img" />
          <p className="text-body-secondary">{template.description}</p>
          <p>
            <small className="text-body-secondary">{template.category}</small>{" "}
            <small className="text-body-secondary">{template.created_at}</small>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchForm;
