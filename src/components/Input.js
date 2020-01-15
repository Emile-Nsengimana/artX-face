import React from 'react';

const Input = ({ type, value, placeholder }) => (
  <input
    type={type || 'button'}
    className="default-input"
    placeholder={placeholder || ''}
    onChange={() => console.log('hello')}
  />
);

export default Input;
