import React, { useState } from "react";

const RandomPokemon = () => {
    const [pokemon, setPokemon] = useState(null);

    const fetchRandomPokemon = async () => {
        const randomId = Math.floor(Math.random() * 898) + 1; // PokeAPI has 898 Pokémon
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const data = await response.json();
            setPokemon(data);
            console.log(data); // Log the Pokémon data to the console
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }
    };

    return (
        <div>
            <button onClick={fetchRandomPokemon}>Mostrar Pokémon Aleatorio</button>
            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            )}
        </div>
    );
};

export default RandomPokemon;