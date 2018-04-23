import React, { Component } from 'react';
import Pokedex from '../components/Pokedex';
import '../styles/normalize.css';
import '../styles/skeleton.css';

class App extends Component {
  render() {
    return (
      <div className="seven columns mt3 br2 ba">
        <Pokedex />
      </div>
    );
  }
}

export default App;