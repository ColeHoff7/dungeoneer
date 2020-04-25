import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './character-creation.css';

export default function Skills(props) {
  const [state, setState] = React.useState({
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuation: false,
    religion: false,
    slightOfHand: false,
    stealth: false,
    survival: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });

    props.onChange(event.target.name, event.target.checked);
  };

  return (
    <FormGroup row>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.acrobatics}
              onChange={handleChange}
              name="acrobatics"
              color="primary"
            />
          }
          label="Acrobatics"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.animalHandling}
              onChange={handleChange}
              name="animalHandling"
              color="primary"
            />
          }
          label="Animal Handling"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.arcana}
              onChange={handleChange}
              name="arcana"
              color="primary"
            />
          }
          label="Arcana"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.athletics}
              onChange={handleChange}
              name="athletics"
              color="primary"
            />
          }
          label="Athletics"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.deception}
              onChange={handleChange}
              name="deception"
              color="primary"
            />
          }
          label="Deception"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.history}
              onChange={handleChange}
              name="history"
              color="primary"
            />
          }
          label="History"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.insight}
              onChange={handleChange}
              name="insight"
              color="primary"
            />
          }
          label="Insight"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.intimidation}
              onChange={handleChange}
              name="intimidation"
              color="primary"
            />
          }
          label="Intimidation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.investigation}
              onChange={handleChange}
              name="investigation"
              color="primary"
            />
          }
          label="Investigation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.medicine}
              onChange={handleChange}
              name="medicine"
              color="primary"
            />
          }
          label="Medicine"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.nature}
              onChange={handleChange}
              name="nature"
              color="primary"
            />
          }
          label="Nature"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.perception}
              onChange={handleChange}
              name="perception"
              color="primary"
            />
          }
          label="Perception"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.performance}
              onChange={handleChange}
              name="performance"
              color="primary"
            />
          }
          label="Performance"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.persuation}
              onChange={handleChange}
              name="persuation"
              color="primary"
            />
          }
          label="Persuation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.religion}
              onChange={handleChange}
              name="religion"
              color="primary"
            />
          }
          label="Religion"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.slightOfHand}
              onChange={handleChange}
              name="slightOfHand"
              color="primary"
            />
          }
          label="Slight of Hand"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.stealth}
              onChange={handleChange}
              name="stealth"
              color="primary"
            />
          }
          label="Stealth"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.survival}
              onChange={handleChange}
              name="survival"
              color="primary"
            />
          }
          label="Survival"
        />
      </FormGroup>
    </FormGroup>
  );
}
