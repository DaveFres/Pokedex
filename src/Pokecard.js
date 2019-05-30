import React from "react";
import "./Pokecard.css";

//const OLD_POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends React.Component {
    render() {
        const { id, name, type, exp } = this.props;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>

                <div className="Pokecard-image">
                    <img src={`${POKE_API}${padToThree(id)}.png`} alt="pokemon" />                
                </div>
                
                <div className="Pokecard-data">type : {type}</div>
                <div className="Pokecard-data">EXP : {exp}</div>
            
                
            </div>
        );
    }
}

export default Pokecard;
