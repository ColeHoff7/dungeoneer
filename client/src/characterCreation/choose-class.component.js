import React, { Component } from 'react';

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
    return this.state.races.map((currentClass, i) => {
      return <CharacterClass characterClass={currentClass} key={i} />
    })
  }

  render() {
    return (
      <div className='chooseClass'>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="barbarian"
                value="barbarian"
                />
        <label className="form-check-label">Barbarian</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="bard"
                value="bard"
                />
        <label className="form-check-label">Bard</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="cleric"
                value="cleric"
                />
        <label className="form-check-label">Cleric</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="druid"
                value="druid"
                />
        <label className="form-check-label">Druid</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="fighter"
                value="fighter"
                />
        <label className="form-check-label">Fighter</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="monk"
                value="monk"
                />
        <label className="form-check-label">Monk</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="paladin"
                value="paladin"
                />
        <label className="form-check-label">Paladin</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="ranger"
                value="ranger"
                />
        <label className="form-check-label">Ranger</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="rogue"
                value="rogue"
                />
        <label className="form-check-label">Rogue</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="sorcerer"
                value="sorcerer"
                />
        <label className="form-check-label">Sorcerer</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="warlock"
                value="warlock"
                />
        <label className="form-check-label">Warlock</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="classOptions"
                id="wizard"
                value="wizard"
                />
        <label className="form-check-label">Wizard</label><br/>
      </div>
    );
  }

}
