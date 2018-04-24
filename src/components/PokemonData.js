import React, {Component} from 'react';

class PokemonData extends Component {
    render() {
        return ( 
            <div className="row mt3 shadow-1 stage-bg br3">
                <div className="twelve columns">
                    <div className = "sans-serif fl br3 cb w-100">
                        <h1 className="f2-l f3-m f4-ns fw5 lh-copy tc mt0 mb0 pt2 pb2 br3 br--top title-bg white-90"> Pokemon Data </h1>
                        <form className="pr4 pl4 pt4">
                            <div class="row">
                                <div class="twelve">
                                    <label for="pokemonName" className="fw3">Pokemon Name</label>
                                    <input type="text" name="pokename" className="u-full-width fw4 f4" id="pokemonName" placeholder="ex. Bulbasaur"/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="twelve mt1">
                                    <p className="ma0 pt3"> Pokemon Abilities </p>
                                    <label for="pokemonAbility1" className="fw3">Abilty 1</label>
                                    <input type="text" name="pokename" className="u-full-width fw4 f4" id="pokemonAbility1" placeholder="ex. Squirt"/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="twelve mt1">
                                    <label for="pokemonAbilitiy2" className="fw3">Ability 2</label>
                                    <input type="text" name="pokename" className="u-full-width fw4 f4" id="pokemonAbilitiy2" placeholder="ex. Swarm"/>
                                </div>
                            </div>

                            <div class="row mt4">
                                <div class="six columns mt1">
                                    <input type="button"  value ="Save Pokemon" name="pokename" className="u-full-width fw3 f4 button save-button mb0"/>
                                </div>
                                <div class="six columns mt1">
                                    <input type="button"  value ="Clear Data" name="pokename" className="u-full-width fw3 f4 button clear-button mb0"/>
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