import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  focusVisible: {},
  raceGrid: {
    height: '30vh',
  },
  buttonBase: {
    backgroundColor: '#858282',
    position: 'relative',
    height: '100%',
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.15,
      },
      '& $marked': {
        opacity: 0,
      },
      '& $title': {
        border: '4px solid currentColor',
      },
    },
  },
  selectedRace: {
    position: 'relative',
    height: '100%',
    width: '100%',
    margin: 'auto',
    zIndex: 1,
    '& $backdrop': {
      opacity: 0.15,
    },
    '& $marked': {
      opacity: 0,
    },
    '& $title': {
      border: '4px solid currentColor',
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
    opacity: 0.8,
    transition: theme.transitions.create('opacity'),
  },
  title: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  marked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function CharacterRaces(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        {props.characterRaces.map(characterRace => (
          <Grid className={classes.raceGrid} item xs={4} align="center">
            <ButtonBase
              focusRipple
              key={characterRace.name}
              className={
                characterRace.name === props.currRace
                  ? classes.selectedRace
                  : classes.buttonBase
              }
              style={{ backgroundColor: characterRace.color }}
              focusVisibleClassName={classes.focusVisible}
              onClick={e => props.onChange(characterRace.name)}
            >
              <span className={classes.buttonBackground} />
              <span className={classes.backdrop} />
              <span className={classes.button}>
                <Typography
                  component="span"
                  variant="h6"
                  color="inherit"
                  className={classes.title}
                >
                  {characterRace.name}
                  <span className={classes.marked} />
                </Typography>
              </span>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
