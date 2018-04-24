import React from 'react';
import Pokemons from './Pokemons';

const PokemonLists = ({ pokemons }) =>  {

    return (
        <div>
            <div className = "row">
                <div className="twelve columns vh-75 mb5 stage-bg overflow-y-auto overflow-x-hidden pa3 br3">
                    {
                        pokemons.map( 
                            (pokemon, i) => {
                            return (
                                <Pokemons 
                                name={pokemon['name']} />
                            );
                        })
                    }   
                </div>
            </div>
        </div>
    );
}

export default PokemonLists;