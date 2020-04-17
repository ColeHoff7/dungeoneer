import React, { Component } from 'react';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './character-creation.css';

const CharacterClass = props => (
  <Grid
    align='center'
    justify='center'
    direction='column'
    xs={3}
  >
    <Paper className='paper' elevation={3} square>{props.characterClass.name}</Paper>
  </Grid>
)

export default class ChooseClass extends Component {

  constructor(props) {
    super(props)

    this.state = { characterClasses: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/class')
      .then(response => {
        this.setState({ characterClasses: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getClasses() {
    return this.state.characterClasses.map((currentClass, i) => {
      console.log(currentClass);
      return <CharacterClass characterClass={currentClass} key={i} />
    })
  }

  render() {
    return (
      <Grid container spacing={3}>
        { this.getClasses() }
      </Grid>
    );
  }

}
