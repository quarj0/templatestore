import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../styles/Templates.css';

const TemplateList = ({ template }) => {
  const { id, title, description, image, category, created_at, download_link } = template;

  return (
    <div className="Template">
      <div className="Template-card">
        <Link to={`${process.env.REACT_APP_API_URL}/templates/${id}`}>
          <div className="Template-cardImageContainer">
            <img className="Template-cardImage" src={image} alt={title} />
          </div>
        </Link>
        <div className="Template-cardBody">
          <h3 className="Template-cardTitle">{title}</h3>
          <p className="Template-cardText">{description}</p>
          <p className="Template-cardText">
            <small className="Template-cardDate">
              Last updated {moment(created_at).fromNow()}
            </small>
          </p>
          <a href={download_link} download className="Template-cardButton">Download</a>
        </div>
      </div>
      <div className="Template-details">
        <h1 className="Template-detailsTitle">{title}</h1>
        <p className="Template-detailsText">{description}</p>
        <p className="Template-detailsText">
          <small className="Template-detailsDate">
            Last updated {moment(created_at).fromNow()}
          </small>
        </p>
        <a href={download_link} download className="Template-detailsButton">Download</a>
      </div>
      <div className="Template-categories">
        <h2 className="Template-categoriesTitle">Categories</h2>
        <ul>
          <li>
            <Link to={`${process.env.REACT_APP_API_URL}/?category=${category}`}>{category}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TemplateList;
