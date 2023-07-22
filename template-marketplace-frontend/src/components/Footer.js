import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaGithubAlt, FaInstagramSquare, FaTwitterSquare, FaLinkedinIn} from 'react-icons/fa';

import Contact from "./Contact";
import About from "./About";


const Footer = () => {
  return (
    <footer className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <h5 className="card-title">Contact Us</h5>
          <Contact />
        </div>
        <div className="col-md-6">
          <h4 className="Footer-title">Follow Us</h4>
          <ul className="Footer-socialLinks">
            <li className="Footer-socialLink">
              <a
                href="https://github.com/hacks-and-codes"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubAlt size={24} color="blue" />
              </a>
            </li>
            <li className="Footer-socialLink">
              <a
                href="https://linkedin.com/in/quarjo"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={24} color="blue" />
              </a>
            </li>
            <li className="Footer-socialLink">
              <a
                href="https://twitter.com/quarjowusu"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare size={24} color="blue" />
              </a>
            </li>
            <li className="Footer-socialLink">
              <a
                href="https://instagram.com/quarjowusu"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare size={24} color="blue" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-header">About Template Market Place</h5>
            <p class="card-text">
              <About />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="Footer-copy">
              &copy; 2023 My templates market. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
