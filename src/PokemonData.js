import React, {Component} from 'react';
import './base-pokemon.css';

class PokemonData extends Component {
    render() {
        return ( 
            <div className = "pokedex-list">
                <form>
                    <h4>Pokemon Name</h4>
                    <input type="text" name="firstname" />
                </form>
                <h2 className = "pokemon-name-pokedata">Bulbasaur</h2> 
            </div>
        );
    }
}

export default PokemonData;