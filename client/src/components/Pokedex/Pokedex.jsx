import React, { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { TypesPokemon } from '../TypesPokemon/TypesPokemon';
import { Pagination } from '../Pagination/Pagination';
import {PokeNotFound} from '../pokeNotFound/PokeNotFound'
import './pokedex.css';
import { Sort } from '../Sort/Sort';



export const Pokedex = ({pokeTotal}) => {
    const cards = 12;
    const [pokeCurrent, setPokeCurrent] = useState(pokeTotal);   //lo cargo
    
    useEffect( () => {
        setPokeCurrent([...pokeTotal].splice(0,cards))  //copia del poketotal
    },[pokeTotal])

    // useEffect( () => {
    //     setPokeCurrent(pokeTotal)
    // })

    return (
        <div className="page-principal">
            <TypesPokemon setPokeCurrent={setPokeCurrent}/>
            <Sort pokeCurrent={pokeCurrent} setPokeCurrent={setPokeCurrent} pokeTotal={pokeTotal}/>
            {(pokeCurrent.length > 0 || (pokeCurrent.name !== undefined && pokeCurrent.name !== 'Error'))? <CardList pokeCurrent={pokeCurrent}/> : <PokeNotFound/>}
            <Pagination pokeTotal={pokeTotal} setPokeCurrent={setPokeCurrent}/>
        </div>
    )
};