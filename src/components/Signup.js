import React from 'react';
import Input from '../components/Input';
import SignupImg from '../img/svg/personal-info.svg';

const Signup = () => (
  <>
          <div className="popup" id="popup_signup">
    <div className="auth-box">
    <div><a href="#" id="close_signup">&times;</a></div>
    <div className="box-login">
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
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm password" />
          <button className="btn-primary" type="button">Signup</button>
        </form>
      </div>
      </div>
    </div>
    </div>
  </>
);

export default Signup;
