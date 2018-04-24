import React from 'react';
import Pokemons from './Pokemons';

const PokemonLists = ({ pokemons }) =>  {
    return (
        <div>
            {
                pokemons.map( 
                    (pokemon, i) => {
                    return (
                        <Pokemons name={pokemon[i].results.name} />
                    );
                })
            }   
        </div>
    );
}

export default PokemonLists;