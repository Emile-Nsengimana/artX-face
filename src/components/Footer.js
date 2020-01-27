import React from 'react';
import Input from './Input';

const Footer = () => (
  <>
    <section className="section-contact-us">
      <div className="contact-info">
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
        <Input type="text" placeholder="E-mail" />
      </div>
      <div className="contact-msg">
        <textarea className="default-input" placeholder="Message" />
        <button type="button" className="btn-primary btn-left">Send</button>
      </div>
    </section>
    <h5>&copy;2020 ARTX. ALL RIGHTS RESERVED.</h5>
  </>
);

export default Footer;
