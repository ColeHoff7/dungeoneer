import React, { Component } from 'react';

export default class SetAbilityScores extends Component {

  render() {
    return (
      <div className='setAbilityScores'>
        <label className="form-check-label">Strength</label>&nbsp;&nbsp;
        <input type="number" name="quantity" min="-5" max="15" value="0" /><br/>
        <label className="form-check-label">Dexterity</label>&nbsp;&nbsp;
        <input type="number" name="quantity" min="-5" max="15" value="0" /><br/>
        <label className="form-check-label">Constitution</label>&nbsp;&nbsp;
        <input type="number" name="quantity" min="-5" max="15" value="0" /><br/>
        <label className="form-check-label">Intelligence</label>&nbsp;&nbsp;
        <input type="number" name="quantity" min="-5" max="15" value="0" /><br/>
        <label className="form-check-label">Wisdom</label>&nbsp;&nbsp;
        <input type="number" name="quantity" min="-5" max="15" value="0" /><br/>
        <label className="form-check-label">Charisma</label>&nbsp;&nbsp;
        <input type="number" name="quantity" min="-5" max="15" value="0" /><br/>
      </div>
    );
  }

}
