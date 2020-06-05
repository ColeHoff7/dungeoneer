import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CharacterCreation from './characterCreation/character-creation.component';

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="menuTitle">
              Dungeoneer
            </Typography>
          </Toolbar>
        </AppBar>
        <Route path="/createCharacter" exact component={CharacterCreation} />
      </Router>
    );
  }
}

export default App;
