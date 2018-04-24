import React, { Component } from 'react';
import './styles/App.css';
import LeftPanel from './layout/LeftPanel';
import RightPanel from './layout/RightPanel';
import pokemonlogo from './Pokemon_2D_logo.svg'

class App extends Component {
  render() {
    return (
      <div className="container pb4 pt4">
        <div className="row">
          <div className="twelve columns">
            <img src={pokemonlogo} alt="pokemonlogo" className="center db h5"/>
            <h1 className="tc f1 lh-title fw6 dark-blue">Welcome to Pokemon Data Information Center</h1>
          </div>
        </div>
        <div className="row">
          <LeftPanel />
          <RightPanel />
        </div>
    </div>
    );
  }
}

export default App;
