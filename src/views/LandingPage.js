import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Mission from '../components/Mission';
import Footer from '../components/Footer';

// eslint-disable-next-line react/prefer-stateless-function
class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="menu">
            <NavBar />
          </div>
          <div className="display">
            <Mission />
          </div>
          <div className="content" />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
