import React from 'react';
import '../App.css'
const PokemonCard = ({pockemon}) => {
    return (
        <div>
            <h1>Pokemon</h1>
            <div className='pokemon'>
                {
                    pockemon.map((item,index ) => (
                        <div className='card' key={index}>
                            <img src={item.sprites.other.dream_world.front_default} alt=""/>
                            <span>{item.name}</span>
                            <button>Подробнее</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PokemonCard;