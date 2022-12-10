import React from 'react';
import { ContainerCards } from '../styles/Styles';
import Card from './Card';

const PokemonTypeFilter = ({ pokemonType }) => {

    return (
        <ContainerCards>
            {pokemonType.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
        </ContainerCards>
    )
}

export default PokemonTypeFilter;