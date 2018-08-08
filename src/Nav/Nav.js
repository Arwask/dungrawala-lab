import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse
           navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="col-6">
              <a className="navbar-brand font-color nav-item " href="#">
                Home
              </a>
            </li>
            <li className="col-6">
              <a className="navbar-brand font-color nav-item" href="#">
                About
              </a>
            </li>
            <li className="col-6">
              <a className="navbar-brand font-color nav-item" href="#">
                Publications
              </a>
            </li>
            <li className="col-6">
              <a className="navbar-brand font-color nav-item" href="#">
                People
              </a>
            </li>
            <li className="col-6">
              <a className="navbar-brand font-color nav-item" href="#">
                Lab Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
