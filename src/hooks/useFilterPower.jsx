import { useEffect } from 'react';

export const useFilterPower = (setPokemonType, pokemonType, pokemonPower, pokemonsFilter) => {
    useEffect(() => {
        let min = 0;
        if (pokemonPower === 50) min = 20;
        if (pokemonPower === 80) min = 51;
        if (pokemonPower === 110) min = 81;
        if (pokemonPower === 130) min = 111;
        if (pokemonPower === 200) min = 131;

        const powerFilter = pokemonsFilter.filter(
            (pokemon) =>
                pokemon.stats[1].base_stat >= min &&
                pokemon.stats[1].base_stat <= pokemonPower
        );

        setPokemonType(powerFilter);
    }, [pokemonPower]);

    return { pokemonType };
}