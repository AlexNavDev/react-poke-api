import { useEffect, useState } from "react";

export const useFetchTypes = () => {
    const [typesPokemon, setTypesPokemon] = useState([])

    useEffect(() => {
        const getTypesPokemon = async () => {
            const url = "https://pokeapi.co/api/v2/type/";

            try {
                const response = await fetch(url);
                const data = await response.json();
                setTypesPokemon(data.results)


            } catch (error) {

            }
        }

        getTypesPokemon();
    }, [])

    return { typesPokemon }


}

