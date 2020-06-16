import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

export default function Equipment(props) {
  return (
    <FormGroup>
      <TextField variant="outlined" multiline rows={4} label="Equipment" />
    </FormGroup>
  );
}
