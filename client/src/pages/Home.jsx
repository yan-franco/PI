import React from "react";
import './home.css';
import home from '../img/home.png'
import logo from '../img/PokemonLogo.png'
import { Link } from "react-router-dom";
import pikapika from '../img/pikapika.gif'

export default function Home() {
    return (
        <div id="subContenerdor">
            <div id="contenedor">
                <div><img src={logo} alt="imagen no found" id="img"/></div>
                <div className="center"><Link to='/pokemons'><input type="submit" value='Come on!' className="boton"/></Link></div>
                <img src={home} alt="imagen no fount" id="imgPrin"/>
                <img src={pikapika} alt="imagen no fount" id="gifpika"/>
            </div>
        </div>
       
    );
};