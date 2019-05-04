import React, { Component } from 'react';
import axios from 'axios'

const CharacterClass = props => (
  <div>
    <input className="form-check-input"
           type="radio"
           name="raceChoices"
           id={props.class.id}
           value={props.class.name}
    />
    <label className="form-check-label">{props.class.name}</label><br/>
  </div>
)

export default class ChooseClass extends Component {

  constructor(props) {
    super(props)

    this.state = {classes: []}
  }

  componentDidMount() {
    axios.get('http://localhost:3001/class')
      .then(response => {
        this.setState({ classes: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  classes() {
    return this.state.classes.map((currentClass, i) => {
      return <CharacterClass characterClass={currentClass} key={i} />
    })
  }

  render() {
    return (
      <div className='chooseClass'>
        { this.classes() }
      </div>
    );
  }

}
