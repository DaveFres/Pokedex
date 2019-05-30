import React from "react";
import "./Pokecard.css";

class Pokecard extends React.Component {
    render() {
        const { id, name, type, exp } = this.props;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt="pokemon"
                />

                <div className="Pokecard-data">type : {type}</div>
                <div className="Pokecard-data">EXP : {exp}</div>
            </div>
        );
    }
}

export default Pokecard;
