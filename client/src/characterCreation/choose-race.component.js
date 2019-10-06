import React, { Component } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

// const Race = props => (
//   <div>
//     <input className="form-check-input"
//            type="radio"
//            name="raceChoices"
//            id={props.race.id}
//            value={props.race.name}
//     />
//     <label className="form-check-label">{props.race.name}</label><br/>
//   </div>
// )

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

    this.state = {data: []}
  }

  componentDidMount() {
    axios.get('http://localhost:3001/race')
      .then(response => {
        console.log(response)
        this.setState(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  races() {
    return this.state.data.map((currentRace, i) => {
      return <Race race={currentRace} key={i} />
    })
  }

  render() {
    return (
      <div className='chooseRace'>
        { this.races() }
      </div>
    );
  }

}
