import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

import './character-creation.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  textField: {
    margin: '10%',
  },
}))

export default function AbilityScores(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormGroup row>
        <FormGroup>
          <TextField
            className={classes.textField}
            id="strengthScore"
            label="Strength"
            variant="outlined"
            defaultValue={props.currAbilityScores.strength}
            onBlur={(e) => props.onAbilityScoresChange("strength", e)}
          />
          <TextField
            className={classes.textField}
            id="dexterityScore"
            label="Dexterity"
            variant="outlined"
            defaultValue={props.currAbilityScores.dexterity}
            onBlur={(e) => props.onAbilityScoresChange("dexterity", e)}
          />
          <TextField
            className={classes.textField}
            id="constitutionScore"
            label="Constitution"
            variant="outlined"
            defaultValue={props.currAbilityScores.constitution}
            onBlur={(e) => props.onAbilityScoresChange("constitution", e)}
          />
        </FormGroup>
        <FormGroup>
        <TextField
          className={classes.textField}
          id="intelligenceScore"
          label="Intelligence"
          variant="outlined"
          defaultValue={props.currAbilityScores.intelligence}
          onBlur={(e) => props.onAbilityScoresChange("intelligence", e)}
        />
        <TextField
          className={classes.textField}
          id="wisdomScore"
          label="Wisdom"
          variant="outlined"
          defaultValue={props.currAbilityScores.wisdom}
          onBlur={(e) => props.onAbilityScoresChange("wisdom", e)}
        />
        <TextField
          className={classes.textField}
          id="charismaScore"
          label="Charisma"
          variant="outlined"
          defaultValue={props.currAbilityScores.charisma}
          onBlur={(e) => props.onAbilityScoresChange("charisma", e)}
        />
        </FormGroup>
      </FormGroup>
    </div>
  )
}
