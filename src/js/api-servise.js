const BASE_URL = 'https://pokeapi.co/api/v2';


// Возвращает промис - нашла покемона, заспарсила данные
function fetchPokemonById(pokemonId) {
    return fetch(`${BASE_URL}/pokemon/${pokemonId}`)
        .then(response => {
            return response.json();
        })
}

export default { fetchPokemonById };