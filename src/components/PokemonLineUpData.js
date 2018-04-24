import React, {Component} from 'react';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../styles/App.css';

const PokemonLineUpData = ({ image, name }) => {
    render() {
        return ( 
            <div className="container">
                <div className="row">
                    <div className="twelve columns">
                        {
                            if(image === null && name === null){
                                <img src={ image } alt="bulbasaur" className="w-70 center db w70-l w70-m"/>
                                <h6 className = "mb0 tc black-60 fw4 f4-l f5-m f7-ns"> No Pokemon </h6>
                            }

                            else{
                                
                            }
                        }
                        <img src={ image } alt="bulbasaur" className="w-70 center db w70-l w70-m"/>
                        <h6 className = "mb0 tc black-60 fw4 f4-l f5-m f7-ns"> No Pokemon </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonLineupData;

