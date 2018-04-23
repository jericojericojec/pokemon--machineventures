import React, {Component} from 'react';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../styles/App.css';
import pokeimage from '../1.png';

class PokemonLineup extends Component {
    render() {
        return ( 
            <div className= "row">
                <div className="twelve columns">
                    <div className="sans-serif fl ba pb3 br2 w-100 pb4">
                        <h1 className="f2 fw3 lh-copy tc mt0 bb pt2 pb2"> Pokemon Lineup </h1>
                        <div className="row mt0 center pr4 pl4">

                            <div className = "bg-blue four columns h4 w4 br2 shadow-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src={pokeimage} alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "bg-blue four columns h4 w4 br2 shadow-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src={pokeimage} alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "bg-blue four columns h4 w4 br2 shadow-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src={pokeimage} alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt3 center pr4 pl4">

                            <div className = "bg-blue four columns h4 w4 br2 shadow-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src={pokeimage} alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "bg-blue four columns h4 w4 br2 shadow-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src={pokeimage} alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "bg-blue four columns h4 w4 br2 shadow-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src={pokeimage} alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonLineup;

