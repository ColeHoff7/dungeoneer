import React, { Component } from 'react';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const Race = props => (
  <div>
    <Card className={styles.card}>
      <CardContent>
        <Typography className={styles.title}>
          {props.race.name}
        </Typography>
      </CardContent>
    </Card>
  </div>
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
      <div className='chooseRace'>
        { this.getRaces() }
      </div>
    );
  }

}
