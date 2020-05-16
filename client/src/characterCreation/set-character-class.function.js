import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  focusVisible: {},
  buttonBase: {
    backgroundColor: '#858282',
    position: 'relative',
    height: 200,
    width: 400,
    margin: 'auto',
    marginTop: 20,
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
  selectedClass: {
    backgroundColor: '#858282',
    position: 'relative',
    height: 200,
    width: 400,
    margin: 'auto',
    marginTop: 20,
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
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  title: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
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

export default function CharacterClasses(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.characterClasses.map((characterClass) => (
        <ButtonBase
          focusRipple
          key={characterClass.name}
          className={characterClass.name === props.currClass ? classes.selectedClass : classes.buttonBase}
          focusVisibleClassName={classes.focusVisible}
          onClick={(e) => props.onChange(characterClass.name)}
        >
          <span className={classes.buttonBackground} />
          <span className={classes.backdrop} />
          <span className={classes.button}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.title}
            >
              {characterClass.name}
              <span className={classes.marked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  )
}
