import React from 'react';
import { Link } from 'react-scroll';

const Welcome = () => (
  <>
    <div className="box-title">
      <h1 className="title-primary">
        <span className="title-primary-top">artx</span>
        <span className="title-primary-sub">your art store</span>
      </h1>
    </div>
    <div className="down-arrow">
      <Link
        to="new-products"
        smooth
        offset={-100}
        duration={2000}
      >
        <span />
        <span />
        <span />
      </Link>
    </div>
  </>
);

export default Welcome;
