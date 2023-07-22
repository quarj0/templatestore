import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CategoryList.css';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/templates}`)
      .then((res) => res.json())
      .then((data) => {
        const categorySet = new Set();
        data.templates.forEach((template) =>
          categorySet.add(template.category, template.image)
        );
        setCategories(Array.from(categorySet));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card">
      <h2 className='card-header'>Categories</h2>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        {categories.map((category, id) => (
          <li key={id}>
            <Link to={`/?category=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
