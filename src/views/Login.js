import React, { Component } from 'react';
import Input from '../components/Input';
import LoginImg from '../img/svg/login.svg';
import LOGIN_QUERY from '../graphql/query/userQuery';
import { useQuery } from '@apollo/react-hooks';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { loading, error, data } = useQuery(LOGIN_QUERY, {
      variables: {
        email: this.state.email,
        password: this.state.password
      }
    });
    console.log('\n\n\n', loading, data, error);
  }
  render() {
    const { email, password } = this.state;
    return (
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
            <form onSubmit={this.handleSubmit}>
              <Input
                name="email"
                type="text"
                placeholder="Username"
                value={email}
                onChange={this.handleChange}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <button className="btn-primary" type="submit">Login</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
