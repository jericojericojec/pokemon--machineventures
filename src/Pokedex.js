import React, {Component} from 'react';
import './base-pokemon.css';

class Pokedex extends Component {
    render() {
        return ( 
            <div className = "pokedex-list">
                <h2 className = "pokemon-name-pokedex">Bulbasaur</h2> 
            </div>
        );
    }
}

export default Pokedex;