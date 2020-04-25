import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

export default function BackgroundInfo(props) {
  return (
    <FormGroup>
      <TextField
        variant='outlined'
        label='Character Name'
      /><br /><br />
      <TextField
        variant='outlined'
        multiline
        rows={4}
        label='Background'
      /><br /><br />
      <TextField
        variant='outlined'
        multiline
        rows={4}
        label='Personality'
      />
    </FormGroup>
  );
}
