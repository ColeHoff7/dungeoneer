import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import './character-creation.css';

const _ = require('lodash');

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    height: '100%',
    width: '100%',
  },
  skillGrid: {
    height: '15vh',
  },
  skillCard: {
    margin: 'auto',
    width: '50%',
  },
  selectedCard: {
    backgroundColor: '#3442d9',
    color: 'white',
    margin: 'auto',
    width: '50%',
  },
}));

function skillSelected(skills, skill) {
  return _.indexOf(skills, skill) > -1;
}

export default function Skills(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.onChange(event.target.name, event.target.checked);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <Grid container spacing={3}>
          {props.characterSkills.map((characterSkill) => (
            <Grid className={classes.skillGrid} item xs={4}>
              <Card className={skillSelected(props.currSkills, characterSkill.key) ? classes.selectedCard : classes.skillCard} variant="outlined">
                <CardContent>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={skillSelected(props.currSkills, characterSkill.key)}
                        onChange={handleChange}
                        name={characterSkill.key}
                        color="default"
                      />
                    }
                    label={characterSkill.name}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </div>
  )
}
