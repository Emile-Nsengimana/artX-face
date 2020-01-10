import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const NavBar = () => (
  <div className="navbar">
    <div className="logo">
      <img src={Logo} alt="" />
    </div>
    <div className="left-menu">
      <Link to="/">HOME</Link>
      <Link to="/gallery">GALLERY</Link>
      <Link to="/about">ABOUT US</Link>
    </div>
    <div className="right-menu">
      <button type="button">Login</button>
      <button type="button" className="btn-round">Get Started</button>
    </div>
  </div>
);

export default NavBar;
