import React, { Component } from 'react';
import axios from 'axios'

const Race = props => (
  <div>
    <input className="form-check-input"
           type="radio"
           name="raceChoices"
           id={props.race.id}
           value={props.race.name}
    />
    <label className="form-check-label">{props.race.name}</label><br/>
  </div>
)

export default class ChooseRace extends Component {

  constructor(props) {
    super(props)

    this.state = {races: []}
  }

  componentDidMount() {
    axios.get('http://localhost:3001/race')
      .then(response => {
        console.log(response.data)
        this.setState({ races: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  races() {
    return this.state.races.map((currentRace, i) => {
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
