import React, { useEffect } from 'react';
import { BtnFilterToggle, ContainerFilter } from '../styles/Styles';
import Filter from './Filter';
import PokemonTypeFilter from './PokemonTypeFilter';

const PokemonTypes = ({ showFilter, setshowFilter, handlePokemonType, setPokemonType, pokemonType, pokemonPower, setPokemonPower, loadingFilter }) => {
    useEffect(() => {
        if (showFilter) {
            setPokemonPower(0);
            setPokemonType([]);
        }
    }, [showFilter]);

    return (
        <ContainerFilter>
            <BtnFilterToggle className="filter__btn--toggle" onClick={() => setshowFilter(!showFilter)}>
                {!showFilter ? "Mostrar Filtro" : "Ocultar Filtro"}
            </BtnFilterToggle>

            {showFilter && <Filter handlePokemonType={handlePokemonType} pokemonType={pokemonType} pokemonPower={pokemonPower} setPokemonPower={setPokemonPower} />
            }

            {!loadingFilter
                ? showFilter && <PokemonTypeFilter pokemonType={pokemonType} />
                : (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div >)
            }
        </ContainerFilter>
    )
}

export default PokemonTypes;