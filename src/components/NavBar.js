import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/svg/logo.svg';

const NavBar = () => (
  <div className="menu">
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="left-menu">
        <a href="/">HOME</a>
        <a href="/gallery">GALLERY</a>
        <a href="#about">ABOUT US</a>
      </div>
      <div className="right-menu">
        <button type="button">Login</button>
        <a href="/signup" className="btn-round">Get Started</a>
      </div>
    </div>
  </div>
);

export default NavBar;
