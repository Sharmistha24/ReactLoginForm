// IntroPage.js
import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import SubmitButton from './SubmitButton'; 
import './IntroPage.css';

import logo from '../image/logo.png'

const IntroPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/create-password');
  };

  return (
    <div className="intro-container">
      <Card className="my-2 intro-card">
        <CardHeader>
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
          Welcome, to Your Professional Profile
          </CardTitle>
          <CardText>
          <p>QCard provides you with a professional profile that you can link to and share in a variety of ways.</p>

          <p>Tap the button below to create your password and activate your account. Once activated, you'll find your QCard already set up and pre-filled with key information, ready for you to use right away!</p>
          <p>Of course, you can make edits to your card and additional information as needed.</p>
          </CardText>
          <div className="custom-button-container">
            <SubmitButton onClick={handleButtonClick}>
              Go somewhere
            </SubmitButton>
          </div>

        </CardBody>
        <CardFooter className="footer custom-footer" style={{ borderRadius: '16px' }}>
        <div className="footer-text">
          If you want to learn more about all the features of QCard, and how to best use it, access our<a href="#">HELP</a> section at any time through the QCard Menu <FontAwesomeIcon icon={faBars} className="menu-icon" />once you've activated your card. 
          </div>
          <div className="dropdown-icon">
            <i className="fas fa-caret-down"></i>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default IntroPage;
