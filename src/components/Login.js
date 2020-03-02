import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import LoginImg from '../img/svg/login.svg';
import { LOGIN_QUERY } from '../graphql/query/userQuery';
import { useQuery } from '@apollo/react-hooks';

const Login = () => {
    const [ credentials, setCredentials ] = useState({
      email: '',
      password: ''
    });
    const [ result, setResult ] = useState({
      error: '',
      data: ''
    });

    const onChange = event => {
      const { name, value } = event.target;
      setCredentials({ ...credentials, [name]: value });
    }

    const { data, loading, error } = useQuery(LOGIN_QUERY, {
      variables: {
        email: credentials.email,
        password: credentials.password
      },
    });

    const handleSubmit = event => {
      event.preventDefault();
      setResult({ ...result, error, data });
    }

    useEffect(() => {
      // console.log(result.data)
      // console.log(credentials.email)
      // result
      // && result.data
      // && reresults.data.user
      // && result.data.token
      // && localStorageSet('user_token', result.data.token);
    });

    return (
      <>
        <div className="popup" id="popup_login">
          <div className="auth-box">
          <div><a href="#" id="close_login">&times;</a></div>
            <div className="box-login">
            <div className="left-side">
              <img className="login-img" src={LoginImg} alt="" />
              <a href="/">
                <h1>artX, your art store</h1>
              </a>
            </div>
            <div className="group">
              <h2>LOGIN</h2>
              <form onSubmit={handleSubmit}>
                <Input
                  name="email"
                  type="text"
                  placeholder="Username"
                  // value={credentials.email}
                  onChange={onChange}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  // value={credentials.password}
                  onChange={onChange}
                />
                <button className="btn-primary" type="submit">Login</button>
              </form>
            </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Login;
