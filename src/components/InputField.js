import React from 'react';

const InputField = ({ type, name, id, placeholder, value, onChange, required }) => (
  <input
    className="form-control" 
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

export default InputField;