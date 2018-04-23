import React, {Component} from 'react';

class PokemonData extends Component {
    render() {
        return ( 
            <div className="row mt3">
                <div className="twelve columns">
                    <div className = "sans-serif fl ba  br2 cb w-100">
                        <h1 className="f2 fw3 lh-copy tc mt0 mb0 pt2 pb2 bb"> Pokemon Data </h1>
                        <form className="pr4 pl4 pt4">
                            <div class="row">
                                <div class="twelve">
                                    <label for="pokemonName" className="fw3">Pokemon Name</label>
                                    <input type="text" name="pokename" className="u-full-width fw3 f4" id="pokemonName" placeholder="Bulbasaur"/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="twelve mt1">
                                    <label for="pokemonName" className="fw3">Pokemon Name</label>
                                    <input type="text" name="pokename" className="u-full-width fw3 f4" id="pokemonName" placeholder="Bulbasaur"/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="twelve mt1">
                                    <label for="pokemonName" className="fw3">Pokemon Name</label>
                                    <input type="text" name="pokename" className="u-full-width fw3 f4" id="pokemonName" placeholder="Bulbasaur"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonData;