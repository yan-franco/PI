import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import {getPokemonName} from '../../actions'


import './search.css'

export const Search = ({setPokeCurrent}) => {
    const dispatch = useDispatch();
    const pokeFilter = useSelector(state => state.pokemonsFilter)
    const [inputValue, setInputValue] = useState("");
    

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)         
              //obtengo todo lo que entra en el input
    }

    const handleClick = () =>{
        dispatch(getPokemonName(inputValue))
        console.log(getPokemonName(inputValue));
        setInputValue("");
    } 

    useEffect(() => {
        setPokeCurrent(pokeFilter)
    }, [pokeFilter, setPokeCurrent])  //atentos al pokeFilter

    return (
        <div >
            <div>
                <input
                    placeholder="Pokemon ..."
                    type="text"
                    value = {inputValue}              //el value se va actualizando
                    onChange = {handleInputChange} 
                    className='input'
                />
                <button type="button" onClick={handleClick} className='buttonNav'>B</button>
            </div>
            
        </div>
    )
}