import React from 'react';
import { useFetchTypes } from '../hooks/useFetchTypes';
import OptionsType from './OptionsType';

const SelectType = ({ handlePokemonType, pokemonType }) => {
    const { typesPokemon } = useFetchTypes();

    const handleChangeType = (e) => {
        handlePokemonType(e.target.value);
    }

    return (
        <div className="custom__select">
            <select name="type" id="select__type" onChange={handleChangeType}>
                <option className="select__type--option" value="empty">{pokemonType.length === 0 ? "Elige Tipo" : "Limpia Filtro"}</option>
                {typesPokemon.slice(0, 18).map((type) => (
                    <OptionsType key={type.name} type={type} />
                ))}
            </select>

            <span className="custom__arrow"></span>
        </div>
    )
}

export default SelectType;