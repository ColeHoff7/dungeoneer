import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const CharacterClass = props => (
  <Grid container
    align='center'
    justify='center'
    direction='column'
    xs={4}
  >
    <Paper className='paper' elevation={3} square>{props.characterClass.name}</Paper>
  </Grid>
)

function getCharacterClasses(characterClasses) {
  return characterClasses.map((currentClass, i) => {
    return <CharacterClass characterClass={currentClass} key={i} />
  })
}

export default function CharacterClasses(props) {
  return (
    <Grid container spacing={1}>
      { getCharacterClasses(props.characterClasses) }
    </Grid>
  );
}
