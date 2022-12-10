import React, { useState } from 'react';
import { FavoriteProvider } from '../context/FavoriteContext';
import { ModalProvider } from '../context/ModalContext';
import { fetchPokemon } from '../helper/fetchPokemon';
import { fetchPokemonType } from '../helper/fetchPokemonType';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { useFilterPower } from '../hooks/useFilterPower';
import FormSearch from './FormSearch';
import ModalCard from './ModalCard';
import PokeDex from './PokeDex';
import PokemonCard from './PokemonCard';
import PokemonFavorite from './PokemonFavorite';
import PokemonTypes from './PokemonTypes';

const PokeApi = () => {
    const [pokemon, setPokemon] = useState("");
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonsFilter, setPokemonsFilter] = useState([]);
    const [pokemonPower, setPokemonPower] = useState(0);
    const [pagination, setPagination] = useState(0);
    const [count, setCount] = useState(20);
    const [error, setError] = useState(false);
    const initialFormName = { name: "" }
    const [formInputName, setFormInputName] = useState(initialFormName);
    const [loading, setLoading] = useState(false);
    const [loadingFilter, setLoadingFilter] = useState(false);
    const [showFilter, setshowFilter] = useState(false);
    const [message, setMessage] = useState(null);

    const offset = count;
    const limit = count;

    const { pokemons, isPending, totalPokemons } = useFetchPokemon(offset * pagination, limit);

    const handleSearchPokemon = async (pokemon) => {
        if (pokemon === null) return;
        const { name } = pokemon;

        setLoading(true);

        try {
            const response = await fetchPokemon(name);
            const data = await response.json();

            if (!response.ok) throw { status: response.status, statusText: response.statusText }
            setLoading(false);
            setPokemon(data);


        } catch (error) {
            setMessage(error.statusText || "Ocurrió un error, pokemon no encontrado")
            setError(true)
            setFormInputName(initialFormName);
            setLoading(false);
        }
    }

    const handlePokemonType = async (pokemonType) => {
        if (pokemonType === "empty") {
            setPokemonType([]);
            setPokemonPower(0);
            return
        };

        if (pokemonType) setPokemonPower(0);
        setLoadingFilter(true);

        try {
            const response = await fetchPokemonType(pokemonType);
            const data = await response.json();

            if (!response.ok) throw { status: response.status, statusText: response.statusText }

            const promises = data.pokemon.map(async (type) => (await getPokemonType(type.pokemon.url)));

            const results = await Promise.all(promises);
            setLoadingFilter(false);
            setPokemonType(results);
            setPokemonsFilter(results);

        } catch (error) {
            setMessage(error.statusText || "Ocurrió un error");
        }

        async function getPokemonType(url) {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }
    }

    useFilterPower(setPokemonType, pokemonType, pokemonPower, pokemonsFilter);

    return (
        <div>
            <FormSearch pokemon={pokemon} setPokemon={setPokemon} initialFormName={initialFormName} formInputName={formInputName} setFormInputName={setFormInputName} handleSearchPokemon={handleSearchPokemon} error={error} setError={setError} message={message} setMessage={setMessage} />

            <FavoriteProvider>
                <ModalProvider>

                    <PokemonCard pokemon={pokemon} loading={loading} />

                    <PokemonFavorite />

                    <PokemonTypes handlePokemonType={handlePokemonType} setPokemonType={setPokemonType} pokemonType={pokemonType} pokemonPower={pokemonPower} setPokemonPower={setPokemonPower} loadingFilter={loadingFilter} showFilter={showFilter} setshowFilter={setshowFilter} />

                    <PokeDex pokemons={pokemons} isPending={isPending} pagination={pagination} setPagination={setPagination} totalPokemons={totalPokemons} count={count} setCount={setCount} showFilter={showFilter} />

                    <ModalCard />

                </ModalProvider>
            </FavoriteProvider>

        </div>
    )
}

export default PokeApi;