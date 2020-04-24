import React, { Component } from 'react';
import axios from 'axios';
import CreationTabs from './creation-tabs.function'

export default class CharacterCreation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      characterClasses: [],
      characterRaces: []
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

  render() {
    return (
      <div>
        <CreationTabs
          characterClasses={this.state.characterClasses}
          characterRaces={this.state.characterRaces}
        />
      </div>
    )
  }

}
