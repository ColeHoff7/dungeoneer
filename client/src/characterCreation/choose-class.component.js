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
      <div className='chooseClass'>
        { this.getClasses() }
      </div>
    );
  }

}
