import React, {Component} from 'react';
import '../styles/normalize.css';
import '../styles/skeleton.css';

class Pokedex extends Component {
    render() {
        return ( 
            <div className="container">
                <div className = "row">
                    <h2 className = "f2 fw3 lh-copy tc mt3">Pokedex</h2> 
                    <div className="twelve columns ba vh-75 mb5">
                        <div className="row">
                            <div className="twelve columns bb pl4">
                                <p className="dib v-mid pb3 pt3 mb0">Bulbasaur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokedex;