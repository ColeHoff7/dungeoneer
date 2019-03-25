import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import CreateCharacter from "./components/create-character.component";
import ChooseClass from "./components/choose-race.component";
import ChooseRace from "./components/choose-class.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Dungeoneer</h1>
          <br/>
          <Link to="/createCharacter">Create Character</Link><br/>
          <Link to="/chooseClass">Choose Class</Link><br/>
          <Link to="/chooseRace">Choose Race</Link><br/>
        </div>
        <Route path="/createCharacter" exact component={CreateCharacter} />
        <Route path="/chooseClass" component={ChooseClass} />
        <Route path="/chooseRace" component={ChooseRace} />
      </Router>
    );
  }
}

export default App;
