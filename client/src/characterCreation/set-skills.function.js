import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import './character-creation.css';

const _ = require('lodash');

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    height: '100%',
    width: '100%',
  },
  focusVisible: {},
  skillGrid: {
    height: '15vh',
  },
  skillButton: {
    backgroundColor: '#3442d9',
    position: 'relative',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.15,
      },
    },
  },
  selectedSkill: {
    backgroundColor: '#3442d9',
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1,
    '& $backdrop': {
      opacity: 0.15,
    },
  },
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  buttonBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    color: 'red',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.7,
    transition: theme.transitions.create('opacity'),
  },
}));

function skillSelected(skills, skill) {
  return _.indexOf(skills, skill) > -1;
}

export default function Skills(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        {props.characterSkills.map(characterSkill => (
          <Grid className={classes.skillGrid} item xs={4} align="center">
            <ButtonBase
              focusRipple
              key={characterSkill.key}
              className={
                skillSelected(props.currSkills, characterSkill.key)
                  ? classes.selectedSkill
                  : classes.skillButton
              }
              focusVisibleClassName={classes.focusVisible}
              onClick={e =>
                props.onChange(
                  characterSkill.key,
                  !skillSelected(props.currSkills, characterSkill.key)
                )
              }
            >
              <span className={classes.buttonBackground} />
              <span className={classes.backdrop} />
              <span className={classes.button}>
                <Typography component="span" variant="h6" color="inherit">
                  {characterSkill.name}
                </Typography>
              </span>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
