import React, { Component } from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './character-creation.css';

const Race = props => (
  <Grid
    align='center'
    justify='center'
    direction='column'
    xs={4}
  >
    <Paper className='paper' elevation={3} square>{props.race.name}</Paper>
  </Grid>
)

export default class ChooseRace extends Component {

  constructor(props) {
    super(props)

    this.state = { races: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/race')
      .then(response => {
        console.log(response)
        this.setState({ races: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getRaces() {
    return this.state.races.map((currentRace, i) => {
      return <Race race={currentRace} key={i} />
    })
  }

  render() {
    return (
      <Grid container spacing={1}>
        { this.getRaces() }
      </Grid>
    );
  }

}
