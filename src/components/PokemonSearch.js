import React, {Component} from 'react';
import PokemonList from './PokemonList';
import '../styles/normalize.css';
import '../styles/skeleton.css';

const SearchBox = ({ searchfield, searchChange }) =>  {
    return ( 
        <div className="row mb3">
            <div className="twelve columns">
                <label for="pokemonName" className="fw3 white-90">Search Pokemon</label>
                <input 
                    type="text"
                    name="pokename"
                    className="u-full-width fw4 f4"
                    id="pokemonName"
                    placeholder="ex. Bulbasaur"
                    onChange={searchChange}
                />
            </div>
        </div>
    );
}

export default SearchBox;