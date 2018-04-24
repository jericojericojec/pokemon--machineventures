import React, {Component} from 'react';
import PokemonList from './PokemonList';
import PokemonSearch from './PokemonSearch';
import '../styles/normalize.css';
import '../styles/skeleton.css';

class Pokedex extends Component  {
        
    constructor() {
        super()
        this.state = {
        pokemons: [],
        searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('http://pokeapi.co/api/v2/pokemon/1')
        .then(response => response.json())
        .then(results => { this.setState({ pokemons: results}) });
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {

        const { pokemons, searchfield } = this.state;
        const filteredPokemons = pokemons.filter(pokemon => { return pokemon.name.toLowerCase().includes(searchfield.toLowerCase()); })

        return ( 
            <div className="container">
                <div className = "row">
                    <h2 className = "f1 fw6 lh-copy tc mt5 white-90 f1-l f2-m f3-ns">Pokedex</h2>
                    <PokemonSearch searchChange={ this.onSearchChange }/>
                    <PokemonList pokemons={ filteredPokemons }/>
                </div>
            </div>
        );
    }
}

export default Pokedex;