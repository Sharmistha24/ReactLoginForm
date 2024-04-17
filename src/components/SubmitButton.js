import React from 'react';
import { Button } from 'reactstrap';

import './IntroPage.css';

const SubmitButton = ({ color, block, onClick, children, disabled = false }) => {
  // Determine the className based on the disabled prop
  const buttonClassName = disabled ? "custom-button-offwhite" : "custom-button";

  return (
    <Button color={color} block={block} onClick={onClick} disabled={disabled} type="button" className={buttonClassName}>
      {children}
    </Button>
  );
};

export default SubmitButton;