import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const CharacterRace = props => (
  <Grid container
    align='center'
    justify='center'
    direction='column'
    xs={4}
  >
    <Paper className='paper' elevation={3} square>{props.characterRace.name}</Paper>
  </Grid>
)

function getCharacterRaces(characterRaces) {
  return characterRaces.map((currentRace, i) => {
    return <CharacterRace characterRace={currentRace} key={i} />
  });
}

export default function CharacterRaces(props) {
  return (
    <Grid container spacing={1}>
      { getCharacterRaces(props.characterRaces) }
    </Grid>
  );
}
