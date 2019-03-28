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
          <Link to="/chooseRace">Choose Race</Link> --->
          <Link to="/chooseClass"> Choose Class</Link> --->
          <Link to="/setAbilityScores"> Set Ability Scores</Link> --->
          <Link to="/chooseSkills"> Choose Skills</Link>
        </div>

        <Route path="/chooseRace" component={ChooseRace} />
        <Route path="/chooseClass" component={ChooseClass} />
        <Route path="/setAbilityScores" component={SetAbilityScores} />
        <Route path="/chooseSkills" component={ChooseSkills} />
      </Router>
    );
  }

}
