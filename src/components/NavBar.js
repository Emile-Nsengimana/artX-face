import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <div className="container">
      <div className="left-side">
        <Link to="/home">HOME</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/about">ABOUT US</Link>
      </div>
      <div className="right-menu">
        <button type="button">Login</button>
        <button type="button">Get Started</button>
      </div>
    </div>
  </div>
);

export default NavBar;
