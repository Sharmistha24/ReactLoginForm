
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const VerificationBoolean = ({ verification }) => {
  return (
    <FormGroup>
      <Label>Verification</Label>
      <Input type="text" value={verification ? 'True' : 'False'} readOnly />
    </FormGroup>
  );
};

export default VerificationBoolean;
