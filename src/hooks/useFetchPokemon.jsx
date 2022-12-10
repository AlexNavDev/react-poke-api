import { useState, useEffect } from "react"

export const useFetchPokemon = (offset = 0, limit = 20) => {
    const [pokemons, setPokemons] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [totalPokemons, setTotalPokemons] = useState(null);

    useEffect(() => {
        const getPokemons = async () => {
            setIsPending(true);
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
                const data = await response.json();

                setTotalPokemons(data.count);

                if (!response.ok) throw { status: response.status, statusText: response.statusText }

                const promises = data.results.map(async (pokemon) => (
                    await getAllPokemons(pokemon.url)
                ));

                const results = await Promise.all(promises);

                setPokemons(results);
                setIsPending(false);

            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                console.log(message);
            }
        }
        getPokemons();

    }, [offset, limit]);

    async function getAllPokemons(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    return { pokemons, isPending, totalPokemons }
}
