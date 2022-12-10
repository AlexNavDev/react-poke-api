import React from 'react';
import { ContainerCards } from '../styles/Styles';
import Card from './Card';

const PokemonCard = ({ pokemon, loading }) => {
    return (
        <section>
            <ContainerCards>
                {!loading
                    ? (<Card pokemon={pokemon} />)
                    : (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)}
            </ContainerCards>
        </section>
    )
}

export default PokemonCard;