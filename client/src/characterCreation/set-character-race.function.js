import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//<Paper className='paper' elevation={3} square onClick={props.onRaceChange}>{props.characterRace.name}</Paper>

const CharacterRace = props => (
  <Grid container
    align='center'
    justify='center'
    direction='column'
    xs={4}
  >
    <Button
      variant='contained'
      color='primary'
      onClick={(e) => props.onChange(props.characterRace.name)}
    >
      {props.characterRace.name}
    </Button>
  </Grid>
)

function getCharacterRaces(characterRaces, onChange) {
  return characterRaces.map((currentRace, i) => {
    return <CharacterRace characterRace={currentRace} key={i} onChange={onChange} />
  });
}

export default function CharacterRaces(props) {
  return (
    <Grid container spacing={1}>
      { getCharacterRaces(props.characterRaces, props.onChange) }
    </Grid>
  );
}
