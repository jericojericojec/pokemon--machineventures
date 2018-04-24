import React from 'react';
import '../styles/normalize.css';
import '../styles/skeleton.css';

const Pokemons = ({ name, pokemonLineupModify }) =>  {
    return (
        <div className="pointer grow row mb3" onClick={ pokemonLineupModify }>
            <div className="twelve columns pl4 br3 pokelist-bg shadow-1">
                <p className="dib v-mid pb3 pt3 mb0 black-70 fw6 ttc">{ name }</p>
            </div>
        </div>
    );
}

export default Pokemons;