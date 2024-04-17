// RegistrationForm.js
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    privateKey: '',
    publicKey: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <InputField type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
      <InputField type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
      <InputField type="text" placeholder="Private Key" name="privateKey" value={formData.privateKey} onChange={handleChange} />
      <InputField type="text" placeholder="Public Key" name="publicKey" value={formData.publicKey} onChange={handleChange} />
      <Button onClick={handleSubmit} text="Submit" />
    </div>
  );
}

export default RegistrationForm;
