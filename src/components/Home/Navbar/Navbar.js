import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
       <Link to="/" className="navbar-brand">
           <img src={logo} className="logoSize" alt="logo"/>
        </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mx-2">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link" href="/">Our Portfolio</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link" href="/">Our Team</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link" href="/">Contact Us</a>
      </li>
      <Link to="/allServiceList" className="nav-item mx-2">
        <button className="btn btn-dark px-4">Admin Panel</button>
      </Link>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;