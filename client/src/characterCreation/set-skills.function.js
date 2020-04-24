import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './character-creation.css';

export default function Skills() {
  const [state, setState] = React.useState({
    checkedAcrobatics: false,
    checkedAnimalHandling: false,
    checkedArcana: false,
    checkedAthletics: false,
    checkedDeception: false,
    checkedHistory: false,
    checkedInsight: false,
    checkedIntimidation: false,
    checkedInvestigation: false,
    checkedMedicine: false,
    checkedNature: false,
    checkedPerception: false,
    checkedPerformance: false,
    checkedPersuation: false,
    checkedReligion: false,
    checkedSlightOfHand: false,
    checkedStealth: false,
    checkedSurvival: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedAcrobatics}
              onChange={handleChange}
              name="checkedAcrobatics"
              color="primary"
            />
          }
          label="Acrobatics"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedAnimalHandling}
              onChange={handleChange}
              name="checkedAnimalHandling"
              color="primary"
            />
          }
          label="Animal Handling"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedArcana}
              onChange={handleChange}
              name="checkedArcana"
              color="primary"
            />
          }
          label="Arcana"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedAthletics}
              onChange={handleChange}
              name="checkedAthletics"
              color="primary"
            />
          }
          label="Athletics"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedDeception}
              onChange={handleChange}
              name="checkedDeception"
              color="primary"
            />
          }
          label="Deception"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedHistory}
              onChange={handleChange}
              name="checkedHistory"
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
              checked={state.checkedInsight}
              onChange={handleChange}
              name="checkedInsight"
              color="primary"
            />
          }
          label="Insight"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedIntimidation}
              onChange={handleChange}
              name="checkedIntimidation"
              color="primary"
            />
          }
          label="Intimidation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedInvestigation}
              onChange={handleChange}
              name="checkedInvestigation"
              color="primary"
            />
          }
          label="Investigation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedMedicine}
              onChange={handleChange}
              name="checkedMedicine"
              color="primary"
            />
          }
          label="Medicine"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedNature}
              onChange={handleChange}
              name="checkedNature"
              color="primary"
            />
          }
          label="Nature"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedPerception}
              onChange={handleChange}
              name="checkedPerception"
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
              checked={state.checkedPerformance}
              onChange={handleChange}
              name="checkedPerformance"
              color="primary"
            />
          }
          label="Performance"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedPersuation}
              onChange={handleChange}
              name="checkedPersuation"
              color="primary"
            />
          }
          label="Persuation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedReligion}
              onChange={handleChange}
              name="checkedReligion"
              color="primary"
            />
          }
          label="Religion"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedSlightOfHand}
              onChange={handleChange}
              name="checkedSlightOfHand"
              color="primary"
            />
          }
          label="Slight of Hand"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedStealth}
              onChange={handleChange}
              name="checkedStealth"
              color="primary"
            />
          }
          label="Stealth"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedSurvival}
              onChange={handleChange}
              name="checkedSurvival"
              color="primary"
            />
          }
          label="Survival"
        />
      </FormGroup>
    </FormGroup>
  );
}
