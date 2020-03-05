import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import CharacterCreation from "./characterCreation/character-creation.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Dungeoneer</h1>
          <br/>
          <Link to="/createCharacter">Create Character</Link><br/>
        </div>
        <Route path="/createCharacter" exact component={CharacterCreation} />
      </Router>
    );
  }
}

export default App;
