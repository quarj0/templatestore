import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const PageNotFound = () => {
  return (
    <div className="NotFound">
      <h1 className="NotFound-title">404 - Oops!</h1>
      <p className="NotFound-text">
        There is something wrong with the page you're looking for. You can go back to the{' '}
        <Link to="/" className="NotFound-link">
          Home
        </Link>
        .
      </p>
    </div>
  );
};

export default PageNotFound;
