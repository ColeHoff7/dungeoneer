import React, { Component } from 'react';

export default class ChooseClass extends Component {

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
