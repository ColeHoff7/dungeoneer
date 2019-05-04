import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ChooseRace from "./choose-race.component";
import ChooseClass from "./choose-class.component";
import SetAbilityScores from "./set-ability-scores.component";
import ChooseSkills from "./choose-skills.component"

export default class CreateCharacter extends Component {

  render() {
    return (
      <Router>
        <div className='createCharacter'>
          <h3>Create Character</h3>
          <br/><br/>
          <p>Starting page give some information about creating a character</p>
          <br/><br/>
          <Link to="/createCharacter/chooseRace">Choose Race</Link> --->
          <Link to="/createCharacter/chooseClass"> Choose Class</Link> --->
          <Link to="/createCharacter/setAbilityScores"> Set Ability Scores</Link> --->
          <Link to="/createCharacter/chooseSkills"> Choose Skills</Link>
        </div>

        <Route path="/createCharacter/chooseRace" component={ChooseRace} />
        <Route path="/createCharacter/chooseClass" component={ChooseClass} />
        <Route path="/createCharacter/setAbilityScores" component={SetAbilityScores} />
        <Route path="/createCharacter/chooseSkills" component={ChooseSkills} />
      </Router>
    );
  }

}
