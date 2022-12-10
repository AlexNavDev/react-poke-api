import React from 'react';
import { ContainerSelectFilter } from '../styles/Styles';
import SelectPower from './SelectPower';
import SelectType from './SelectType';

const Filter = ({ handlePokemonType, pokemonType, pokemonPower, setPokemonPower }) => {

    return (
        <>
            <h3>Filtrar</h3>
            <p>por tipo</p>
            <ContainerSelectFilter>
                <SelectType handlePokemonType={handlePokemonType} pokemonType={pokemonType} />
                {pokemonType.length !== 0 &&
                    <>
                        <p>por rango de poder</p>
                        <SelectPower pokemonPower={pokemonPower} setPokemonPower={setPokemonPower} />
                    </>
                }
            </ContainerSelectFilter>
        </>
    )
}

export default Filter;