import React, { Component } from 'react';
import axios from 'axios'

const CharacterClass = props => (
  <div>
    <input className="form-check-input"
           type="radio"
           name="classChoices"
           id={props.characterClass.id}
           value={props.characterClass.name}
    />
    <label className="form-check-label">{props.characterClass.name}</label><br/>
  </div>
)

export default class ChooseClass extends Component {

  constructor(props) {
    super(props)

    this.state = {data: []}
  }

  componentDidMount() {
    axios.get('http://localhost:3001/class')
      .then(response => {
        this.setState(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  classes() {
    return this.state.data.map((currentClass, i) => {
      console.log(currentClass);
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
