import React from 'react';

const Input = ({ type, value, placeholder, onChange, name }) => (
  <input
    type={type || 'button'}
    className="default-input"
    placeholder={placeholder || ''}
    onChange={onChange}
    name={name}
  />
);

export default Input;
