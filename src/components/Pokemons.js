import React, { Component } from 'react';
import '../styles/normalize.css';
import '../styles/skeleton.css';

const Pokemons = ({ name }) =>  {
    return ( 
        <div className = "row">
            <div className="twelve columns vh-75 mb5 stage-bg overflow-y-auto pa3 br3">
                <div className="pointer grow row mb3">
                    <div className="twelve columns pl4 br3 pokelist-bg shadow-1">
                        <p className="dib v-mid pb3 pt3 mb0 black-70 fw6">{ name }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemons;