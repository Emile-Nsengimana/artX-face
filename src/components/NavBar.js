import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import Logo from '../img/svg/logo.svg';


const NavBar = () => (
  <nav className="navbar">
    <img src={Logo} alt="Logo" className="logo" />
    <div className="menu">
      <a href="/">HOME</a>
      <a href="/">GALLERY</a>
      <a href="#about">ABOUT US</a>
    </div>
    <div className="navbar-link">
      <a href="/login" className="btn">Login</a>
      <a href="/signup" className="btn btn-round">Get started</a>
    </div>
  </nav>
);

export default NavBar;
