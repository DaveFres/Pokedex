import React from "react";
import "./Pokecard.css";

class Pokecard extends React.Component {
    render() {
        const { id, name, type, base_experience } = this.props;
        return (
            <div className="Pokecard">
                <h1>{name}</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt="pokemon"
                />
                <div>
                    <p>type : {type}</p>
                    <p>EXP : {base_experience}</p>
                </div>
            </div>
        );
    }
}

export default Pokecard;
