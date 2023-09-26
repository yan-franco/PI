import React from 'react'
import './pokeNotFound.css'
import poke_not_found from '../../img/notFound.png'

export const PokeNotFound = () => {
    return (
        <div className="poke-not-found">
            <img 
				src={poke_not_found}
				alt='Pikachu loader'
                className='imgNot'
			/>
            <span className="title">Pokemon not found</span>
        </div> 
    )
}