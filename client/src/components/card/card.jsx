import React from "react";
import { Link } from "react-router-dom";
import './card.css'

export const Card = ({ id, name, sprite, types }) => {
    return (
        <div className='pokemonCard'>
            <Link to={'pokemons/' + id}>
                <button id="buttonC">
                    <div>
                        <h3 className='capitalizeText' id="h3">{name}</h3>
                        <ul className='typeList'>
                            {types.map(type => (
                                <p key={type.name}>{type.name}</p>
                            ))}
                        </ul>
                    </div>
                    <div className='image'>
                        <img src={sprite}
                            width={200}
                            height={130}
                            alt={name}    
                        />
                    </div>
                </button>
            </Link>
        </div>
    )
}