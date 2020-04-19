import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import './character-creation.css';

export default class SetAbilityScores extends Component {

  render() {
    return (
      <div className='setAbilityScores'>
        <TextField className="ability-score-input" id="strengthScore" label="Strength" variant="outlined" defaultValue="0" /><br/><br/>
        <TextField className="ability-score-input" id="dexterityScore" label="Dexterity" variant="outlined" defaultValue="0" /><br/><br/>
        <TextField className="ability-score-input" id="constitutionScore" label="Constitution" variant="outlined" defaultValue="0" /><br/><br/>
        <TextField className="ability-score-input" id="intelligenceScore" label="Intelligence" variant="outlined" defaultValue="0" /><br/><br/>
        <TextField className="ability-score-input" id="wisdomScore" label="Wisdom" variant="outlined" defaultValue="0" /><br/><br/>
        <TextField className="ability-score-input" id="charismaScore" label="Charisma" variant="outlined" defaultValue="0" />
      </div>
    );
  }

}
