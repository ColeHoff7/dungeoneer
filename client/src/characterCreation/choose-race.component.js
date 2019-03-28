import React, { Component } from 'react';

export default class ChooseRace extends Component {

  render() {
    return (
      <div className='chooseRace'>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="dragonborn"
                value="dragonborn"
                />
        <label className="form-check-label">Dragonborn</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="dwarf"
                value="dwarf"
                />
        <label className="form-check-label">Dwarf</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="elf"
                value="elf"
                />
        <label className="form-check-label">Elf</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="gnome"
                value="gnome"
                />
        <label className="form-check-label">Gnome</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="halfelf"
                value="halfelf"
                />
        <label className="form-check-label">Half-Elf</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="halfling"
                value="halfling"
                />
        <label className="form-check-label">Halfling</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="halforc"
                value="halforc"
                />
        <label className="form-check-label">Half-Orc</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="human"
                value="human"
                />
        <label className="form-check-label">Human</label><br/>
        <input  className="form-check-input"
                type="radio"
                name="raceOptions"
                id="tiefling"
                value="tiefling"
                />
        <label className="form-check-label">Tiefling</label><br/>
      </div>
    );
  }

}
