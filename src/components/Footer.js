import React from 'react';
import facebook from '../img/svg/facebook.svg';
import twitter from '../img/svg/twitter.svg';
import linkedin from '../img/svg/linkedin.svg';

const Footer = () => (
  <>
    <div className="last">
      <div className="contact">
        <h2>Contacts</h2>
        <ul>
          <li>
            <span>Email: </span>
            ubugeni@artx.io
          </li>
          <li>
            <span>Phone: </span>
            +250 07 820 577 91
          </li>
          <li>
            <span>Facebook: </span>
            artx-ubugeni
          </li>
        </ul>
      </div>
      <div className="social">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
      </div>
    </div>
  </>
);

export default Footer;
