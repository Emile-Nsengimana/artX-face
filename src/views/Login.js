import React from 'react';
import Input from '../components/Input';
import LoginImg from '../img/svg/login.svg';

const Login = () => (
  <>
    <div className="auth-box">
      <div className="left-side">
        <img className="login-img" src={LoginImg} alt="" />
        <a href="/">
          <h1>artX, your art store</h1>
        </a>
      </div>
      <div className="group">
        <h2>LOGIN</h2>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <button className="btn-primary" type="button">Login</button>
        </form>
      </div>
    </div>
  </>
);

export default Login;
