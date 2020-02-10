import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../img/svg/logo.svg';

const token = false;
const NavBar = () => (
  <nav className="navbar">
    <img src={Logo} alt="Logo" className="logo" />
    <div className="menu">
      <a href="/">HOME</a>
      <a href="/">GALLERY</a>
      <Link
        to="about"
        smooth
        offset={-85}
        duration={2000}
      >
      ABOUT
      </Link>

    </div>

    {token !== true ? (
      <div className="navbar-link">
        <a href="/login" className="btn">Login</a>
        <a href="/signup" className="btn btn-round">Get started</a>
      </div>
    ) : (
      <div className="btn-menu">
        <div className="btn-menu--burger" />
      </div>
    )}
  </nav>
);

export default NavBar;
