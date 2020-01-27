import React from 'react';
import BackgroundImg from '../img/home.jpg';
import Down from '../img/svg/down-arrow.svg';

const Welcome = () => (
  <>
    <div className="box-title">
      <h1 className="title-primary">
        <span className="title-primary-top">artx</span>
        <span className="title-primary-sub">your art store</span>
      </h1>
    </div>
    <div className="down-arrow">
      <a href="/"><img src={Down} alt="" /></a>
    </div>
  </>
);

export default Welcome;
