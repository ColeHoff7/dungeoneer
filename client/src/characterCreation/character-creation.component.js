import React, { Component } from 'react';
import axios from 'axios';
import CreationTabs from './creation-tabs.function';

const _ = require('lodash');

export default class CharacterCreation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      characterClasses: [],
      characterRaces: [],
      currClass: "",
      currRace: "",
      currAbilityScores: {
        "strength": 0,
        "dexterity": 0,
        "constitution": 0,
        "intelligence": 0,
        "wisdom": 0,
        "charisma": 0
      },
      currSkills: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/class')
      .then(response => {
        this.setState({ characterClasses: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:3001/api/race')
      .then(response => {
        this.setState({ characterRaces: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClassChange = (characterClassName) => {
    this.setState({ currClass: characterClassName });
  };

  onRaceChange = (characterRaceName) => {
    this.setState({ currRace: characterRaceName });
  };

  onAbilityScoresChange = (abilityName, value) => {
    var updatedAbilityScores = this.state.currAbilityScores;
    updatedAbilityScores[abilityName] = value;

    this.setState({ currAbilityScores: updatedAbilityScores });
  };

  onSkillsChange = (skill, checked) => {
    if (checked) {
      this.setState({ currSkills: _.concat(this.state.currSkills, skill) })
    } else {
      this.setState({ currSkills: _.pull(this.state.currSkills, skill) });
    }
  };

  render() {
    return (
      <div>
        <CreationTabs
          characterClasses={this.state.characterClasses}
          characterRaces={this.state.characterRaces}
          onClassChange={this.onClassChange}
          onRaceChange={this.onRaceChange}
          onAbilityScoresChange={this.onAbilityScoresChange}
          onSkillsChange={this.onSkillsChange}
          currClass={this.state.currClass}
          currRace={this.state.currRace}
          currAbilityScores={this.state.currAbilityScores}
          currSkills={this.state.currSkills}
        />
      </div>
    )
  }

}
