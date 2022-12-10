import React from 'react';
import Cards from './Cards';
import Pagination from './Pagination';

const PokeDex = ({ pokemons, isPending, pagination, setPagination, totalPokemons, count, setCount, showFilter }) => {

    return (
        <section className="pokedex">
            {!showFilter && (<Pagination pagination={pagination} setPagination={setPagination} totalPokemons={totalPokemons} count={count} setCount={setCount} />)}

            {!isPending
                ? !showFilter && (<Cards pokemons={pokemons} />
                )
                : (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
            }

            {!showFilter && (<Pagination pagination={pagination} setPagination={setPagination} totalPokemons={totalPokemons} count={count} setCount={setCount} />)}
        </section>
    )
}

export default PokeDex;