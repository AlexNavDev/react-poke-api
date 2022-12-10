import React from 'react';
import { ContainerCards } from '../styles/Styles';
import Card from './Card';

const Cards = ({ pokemons }) => {
    if (!pokemons) return;
    return (
        <ContainerCards>
            {pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
            ))}
        </ContainerCards>
    )
}

export default Cards;