import React from 'react'

export const ListStats = ({ pokemon }) => {

    return (
        <li><span className="stats__name">{pokemon.stat.name}:</span> <span className="stats__base">{pokemon.base_stat}</span> </li>
    )
}

export const ListAbilities = ({ pokemon }) => {
    return (<li>{pokemon.ability.name}</li>)
}

export const ListMoves = ({ pokemon }) => {
    return (<li>{pokemon.move.name}</li>)
}

