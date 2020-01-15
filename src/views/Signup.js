import React from 'react';
import Input from '../components/Input';
import NavBar from '../components/NavBar';
import SignupImg from '../img/svg/personal-info.svg';
import Logo from '../img/svg/logo.svg';

const Signup = () => (
  <>
    {/* <NavBar /> */}
    <div className="signup">
      <div className="left-side">
        <img src={SignupImg} alt="" />
        <a href="/">
          <h1>artX, your art store</h1>
        </a>
      </div>
      <div className="group">
        <h2>SIGNUP</h2>
        <form>
          <Input type="text" placeholder="National ID" />
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="E-mail" />
          <Input type="text" placeholder="Phone No." />
          <Input type="text" placeholder="Nationality" />
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="Street No." />
          <Input type="text" placeholder="Post code" />
          <Input type="text" placeholder="Password" />
          <button type="button">Signup</button>
        </form>
      </div>
    </div>
  </>
);

export default Signup;
