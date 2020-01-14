import React from 'react';
import BackgroundImg from '../img/home.jpg';
import Down from '../img/svg/down-arrow.svg';

const Welcome = () => {
  return (
    <>
      <img className="welcome-img" src={BackgroundImg} alt="" />
      <p className="welcome-msg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div className="down-dv"><img src={Down} alt="" /></div>
    </>
  );
};

export default Welcome;
