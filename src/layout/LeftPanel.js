import React, { Component } from 'react';
import PokemonLineup from '../components/PokemonLineup';
import PokemonData from '../components/PokemonData';
import '../styles/normalize.css';
import '../styles/skeleton.css';

class App extends Component {
  render() {
    return (
        <div className="five columns mt3">
        <PokemonLineup />
        <PokemonData />
        </div>
    );
  }
}

export default App;