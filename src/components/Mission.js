import React from 'react';
import BackgroundImg from '../img/home.jpg';
import Down from '../img/down-arrow.svg';

const Mission = () => {
  return (
    <>
      <img className="slide" src={BackgroundImg} alt="" />
      <div className="btn-down"><img src={Down} alt="" /></div>
    </>
  );
};

export default Mission;
