import React, { useEffect, useState } from 'react';
import PokemonCard from "./components/PokemonCard.jsx";

const App = () => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const getAsyncData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
                const data = await response.json();



                const promises = data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const pokemonData = await response.json();
                    return pokemonData;
                });

                const allPokemonData = await Promise.all(promises);
                setPokemonData(allPokemonData)
            } catch (e) {
                console.error(e);
            }
        };

        getAsyncData();
    }, []);
    console.log(pokemonData)
    return (
        <div>
            <PokemonCard pockemon={pokemonData} />
        </div>
    );
};

export default App;
