import React, {useEffect}from "react";
import {useDispatch, useSelector} from 'react-redux';
import './pokemons.css';
import { NavBar } from "../NavBar/NavBar";
import { Pokedex } from "../Pokedex/Pokedex";
import Loader from "../Loader/Loader";
import { getPokemons } from "../../actions";


export default function Home(){
    const dispatch = useDispatch();
    const pokeTotal = useSelector(state => state.pokemonsTotal)
    useEffect( () => {
        dispatch(getPokemons())
    }, [dispatch])
    
    return (
        <div>
            <div id="conten">
                <NavBar pokeTotal={pokeTotal}/>
                {/* <div id="center">
                    <input type="submit" value='1' id="button1"/>
                    <input type="submit" value='2' id="button2"/>
                    <input type="submit" value='3' id="button3"/>
                    <input type="submit" value='4' id="button4"/>
                </div> */}
                {pokeTotal.length > 0 ? <Pokedex pokeTotal={pokeTotal}/> : <Loader/>}
                
            </div>
        </div>
        
    )
}