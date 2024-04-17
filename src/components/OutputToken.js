
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const OutputToken = ({ token }) => {
  return (
    <FormGroup>
      <Label>Token</Label>
      <Input type="text" value={token} readOnly />
    </FormGroup>
  );
};

export default OutputToken;
