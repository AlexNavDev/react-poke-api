const baseUrl = "https://pokeapi.co/api/v2";
const query = {
    pokemon: "pokemon"
}

export const fetchPokemon = async (pokemonSearch) => {
    return fetch(`${baseUrl}/${query.pokemon}/${pokemonSearch}`)

}





