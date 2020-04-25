import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// <Paper className='paper' elevation={3} square>{props.characterClass.name}</Paper>

const CharacterClass = props => (
  <Grid container
    align='center'
    justify='center'
    direction='column'
    xs={4}
  >
    <Button
      variant='contained'
      color='primary'
      onClick={(e) => props.onChange(props.characterClass.name)}
    >
      {props.characterClass.name}
    </Button>
  </Grid>
)

function getCharacterClasses(characterClasses, onChange) {
  return characterClasses.map((currentClass, i) => {
    return <CharacterClass characterClass={currentClass} key={i} onChange={onChange} />
  })
}

export default function CharacterClasses(props) {
  return (
    <Grid container spacing={1}>
      { getCharacterClasses(props.characterClasses, props.onChange) }
    </Grid>
  );
}
