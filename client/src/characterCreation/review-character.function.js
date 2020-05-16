import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
}));

export default function ReviewCharacter(props) {
  const classes = useStyles();

  console.log(props);

  return (
    <div className={classes.root}>
      <p>{String(props.currRace)}</p><br/>
      <p>{String(props.currClass)}</p><br/>
      <p>{String(props.currAbilityScores)}</p><br/>
      <p>{String(props.currSkills)}</p><br/>
    </div>
  );
}
