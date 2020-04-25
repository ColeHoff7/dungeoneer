import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

import './character-creation.css';

export default function AbilityScores(props) {
  return (
    <FormGroup row>
      <FormGroup>
        <TextField
          className="ability-score-input"
          id="strengthScore"
          label="Strength"
          variant="outlined"
          defaultValue="0"
          onBlur={(e) => props.onAbilityScoresChange("strength", e)}
        />
        <TextField
          className="ability-score-input"
          id="dexterityScore"
          label="Dexterity"
          variant="outlined"
          defaultValue="0"
          onBlur={(e) => props.onAbilityScoresChange("dexterity", e)}
        />
        <TextField
          className="ability-score-input"
          id="constitutionScore"
          label="Constitution"
          variant="outlined"
          defaultValue="0"
          onBlur={(e) => props.onAbilityScoresChange("constitution", e)}
        />
      </FormGroup>
      <FormGroup>
      <TextField
        className="ability-score-input"
        id="intelligenceScore"
        label="Intelligence"
        variant="outlined"
        defaultValue="0"
        onBlur={(e) => props.onAbilityScoresChange("intelligence", e)}
      />
      <TextField
        className="ability-score-input"
        id="wisdomScore"
        label="Wisdom"
        variant="outlined"
        defaultValue="0"
        onBlur={(e) => props.onAbilityScoresChange("wisdom", e)}
      />
      <TextField
        className="ability-score-input"
        id="charismaScore"
        label="Charisma"
        variant="outlined"
        defaultValue="0"
        onBlur={(e) => props.onAbilityScoresChange("charisma", e)}
      />
      </FormGroup>
    </FormGroup>
  )
}
