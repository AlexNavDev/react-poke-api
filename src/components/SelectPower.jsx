import React from 'react';

const SelectPower = ({ pokemonPower, setPokemonPower }) => {
    const handleRangePower = (e) => {
        const power = parseInt(e.target.value)
        setPokemonPower(power);
    }

    return (
        <div id="select__type--rank">
            <input
                type="radio"
                id="rank1"
                name="rank"
                value="50"
                checked={pokemonPower === 50 ? true : false}
                onChange={handleRangePower}
            />
            <label htmlFor="rank1">20-50</label>
            <input
                type="radio"
                id="rank2"
                name="rank"
                value="80"
                checked={pokemonPower === 80 ? true : false}
                onChange={handleRangePower}
            />
            <label htmlFor="rank2">51-80</label>
            <input
                type="radio"
                id="rank3"
                name="rank"
                value="110"
                checked={pokemonPower === 110 ? true : false}
                onChange={handleRangePower}
            />
            <label htmlFor="rank3">81-110</label>
            <input
                type="radio"
                id="rank4"
                name="rank"
                value="130"
                checked={pokemonPower === 130 ? true : false}
                onChange={handleRangePower}
            />
            <label htmlFor="rank4">111-130</label>
            <input
                type="radio"
                id="rank5"
                name="rank"
                value="200"
                checked={pokemonPower === 200 ? true : false}
                onChange={handleRangePower}
            />
            <label htmlFor="rank5">131+</label>
        </div>
    )
}

export default SelectPower;