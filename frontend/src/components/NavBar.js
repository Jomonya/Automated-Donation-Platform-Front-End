import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Automated Donation Platform</Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item dropdown">
          <span>About</span>
          <div className="dropdown-content">
            <Link to="/about/what-we-do">What We Do</Link>
            <Link to="/about/our-team">Our Team</Link>
            <Link to="/about/careers">Careers</Link>
          </div>
        </li>
        <li className="navbar-item dropdown">
          <span>Beneficiaries</span>
          <div className="dropdown-content">
            <Link to="/beneficiaries/stories">Beneficiary Stories</Link>
          </div>
        </li>
        <li className="navbar-item dropdown">
          <span>Charities</span>
          <div className="dropdown-content">
            <Link to="/charities/form">Charity Form</Link>
            <Link to="/charities/list">List of Charities</Link>
          </div>
        </li>
        <li className="navbar-item dropdown">
          <span>Programs</span>
          <div className="dropdown-content">
            <Link to="/programs/sanitization">Sanitization Program</Link>
            <Link to="/programs/pad-a-girl">Pad a Girl Program</Link>
            <Link to="/programs/clean-water">Clean Water Program</Link>
          </div>
        </li>
        <li className="navbar-item">
          <Link to="/donate">Donate</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
