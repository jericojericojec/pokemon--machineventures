import React, { Component } from 'react';
import Pokedex from '../components/Pokedex';
import '../styles/normalize.css';
import '../styles/skeleton.css';

class RightPanel extends Component {
  render(){
    return (
      <div className="seven columns mt3 br3 shadow-1 pokedex-bg">
        <Pokedex  />
      </div>
    );
  }
}

export default RightPanel;