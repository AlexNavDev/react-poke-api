const baseUrl = "https://pokeapi.co/api/v2";
const query = {
    type: "type"
}

export const fetchPokemonType = async (pokemonType) => {
    return fetch(`${baseUrl}/${query.type}/${pokemonType}`)

}

