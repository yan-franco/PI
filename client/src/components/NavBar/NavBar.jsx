
import React, { useEffect, useState } from 'react';
import './navBar.css'
import logo from '../../img/PokemonLogo.png'
import { Link } from "react-router-dom";
import { Search } from '../Search/Search';
import {Button} from '../Button/Button'



export const NavBar = ({pokeTotal}) => {
    const cards = 12;
    const [, setPokeCurrent] = useState(pokeTotal);   //lo cargo
    
    useEffect( () => {
        setPokeCurrent([...pokeTotal].splice(0,cards))  //copia del poketotal
    },[pokeTotal])

    
    return (
        <div id="nav">
            <Link to='/'><img src={logo} alt="img not found" id="imgNav"/></Link>
            <header>
                <Button link={'/create'} name={"Create"} classname={"secundary"}/>
            </header>
            <div>
                <Search setPokeCurrent={setPokeCurrent}/>
            </div>
        </div>
    )
    
}

