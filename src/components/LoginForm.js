import React, { useState } from 'react';
import { CardHeader,Row, Col, Form, FormGroup, Label, Card, CardBody, CardTitle, CardText,CardFooter, Alert } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@mui/material';
import { ApiUrl, EncryptionPassword } from './config';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import SubmitButton from './SubmitButton'; 
import ConfirmationModal from './ConfirmationModal'; 
import { validateEmail, validatePassword } from './Validation';

import logo from '../image/logo.png'
import './LoginForm.css';
import './IntroPage.css';

library.add(faEye, faEyeSlash);

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const toggleModal = () => {
    console.log('Toggling modal state'); // Add this line for debugging
    setModalOpen(!modalOpen);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form inputs
    if (!validateEmail(formData.email)) {
      setError('Invalid email address');
      return;
    }
  
    if (!validatePassword(formData.password)) {
      setError('Password must be 7-20 characters long, contain at least one capital letter, and no spaces');
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(formData), EncryptionPassword).toString();
      const response = await fetch(ApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: encryptedData })
      });
  
      if (response.ok) {
        toggleModal();
        setSuccessMessage('Successfully registered');
      } else {
        setError('Failed to register. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Fetch error:', error);
    }
  };
  

  const isFormEmpty = Object.values(formData).some(value => value.trim() === '');
  
  return (
    <div className="intro-container">
      <Row>
        <Col md="6">
        <Card className="my-2 intro-card">
          <CardHeader>
          <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
          </CardHeader>
            <CardBody>
            <CardTitle tag="h5" className='login-header'>
            Create Your Password
              </CardTitle>
              <CardText>
              <p>Once you create your password and activate your account, your QCard will be available for you to share with others. You'll use your password any time you want to make edits to your QCard.</p>
              </CardText>
              <Form onSubmit={handleSubmit}>
                {error && <Alert color="danger">{error}</Alert>}
                {successMessage && <Alert color="success">{successMessage}</Alert>}
                <FormGroup>
                  <div className="email-input">
                  <TextField
                      type="email"
                      name="email"
                      id="email"
                      variant="outlined"
                      placeholder="abc@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="info-icon"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="password-input">
                  <TextField
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      label="Please Create a password"
                      placeholder="Please create a password"
                      value={formData.password}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      className="toggle-password-icon"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="password-input">
                  <TextField
                      type={confirmPasswordVisible ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      label="Confirm password"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{
                        style: { color: 'black' }, // Change color to purple
                      }}
                      fullWidth
                      required
                    />
                    <FontAwesomeIcon
                      icon={confirmPasswordVisible ? faEyeSlash : faEye}
                      onClick={toggleConfirmPasswordVisibility}
                      className="toggle-password-icon"
                    />
                  </div>
                </FormGroup>
                <div className="custom-button-container marTB">
                <SubmitButton color="primary" block disabled={isFormEmpty} onClick={handleSubmit}>Activate My Profile</SubmitButton>
                </div>
              </Form>
            </CardBody>
            <CardFooter className="text-center login-card-footer">
              <small><a href='#'>View Privacy Policy</a>.</small>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <ConfirmationModal isOpen={modalOpen} toggle={toggleModal} />
    </div>
  );
}

export default LoginForm;
