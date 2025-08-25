import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">MSBRChess </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Play</a></li>
        <li><a href="#">Learn</a></li>
      </ul>
      <button className="navbar-button">Get Started</button>
    </div>
  );
};

export default Navbar;
