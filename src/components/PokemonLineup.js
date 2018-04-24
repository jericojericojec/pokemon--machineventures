import React, {Component} from 'react';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../styles/App.css';

class PokemonLineup extends Component {
    render() {
        return ( 
            <div className= "row">
                <div className="twelve columns">
                    <div className="sans-serif fl pb3 br3 w-100 pb4 shadow-1 stage-bg">
                        <h1 className="f2-l f3-m f4-ns fw5 lh-copy tc mt0 pt2 pb2 title-bg white-90 br3 br--top"> Your Pokemon Line-up </h1>
                        <div className="row mt0 center pr4 pl4">

                            <div className = "pointer grow four columns h4 w4 br4 shadow-1 pa2 pokelist-bg b--black-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur" className="w-70 center db w70-l w70-m"/>
                                            <h6 className = "mb0 tc black-60 fw4 f4-l f5-m f7-ns"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "pointer grow four columns h4 w4 br4 shadow-1 pa2 pokelist-bg b--black-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc black-60 fw4 f4-l f5-m f7-ns"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "pointer grow four columns h4 w4 br4 shadow-1 pa2 pokelist-bg b--black-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc black-60 fw4 f4-l f5-m f7-ns"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row mt3 center pr4 pl4">

                            <div className = "pointer grow four columns h4 w4 br4 shadow-1 pa2 pokelist-bg b--black-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc black-60 fw4 f4-l f5-m f7-ns"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "pointer grow four columns h4 w4 br4 shadow-1 pa2 pokelist-bg b--black-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc black-60 fw4 f4-l f5-m f7-ns"> Bulbasaur </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "pointer grow four columns h4 w4 br4 shadow-1 pa2 pokelist-bg b--black-60">
                                <div className="container">
                                    <div className="row">
                                        <div className="twelve columns">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur" className="w-70 center db"/>
                                            <h6 className = "mb0 tc black-60 fw4 f4-l f5-m f7-ns"> Bulbasaur </h6>
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

