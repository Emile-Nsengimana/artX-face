import React from 'react';
import mastercard from '../img/mastercard.jpg';
import mtn from '../img/mtn.png';
import airtelTigo from '../img/airtel-tigo.jpg';

const Footer = () => (
  <div className="last">
    <a href="#" alt="">Contact us</a>
    <a href="#" alt="">Privacy policy</a>
    <a href="#" alt="">Terms of use</a>
    <div className="card">
      <img src={mastercard} alt="" />
      <img src={mtn} alt="" />
      <img src={airtelTigo} alt="" />
    </div>
    <h6>&copy;2020 ARTX. ALL RIGHTS RESERVED.</h6>
  </div>
);

export default Footer;
