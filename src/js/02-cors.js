/*
* - Cross-Origin Resource Sharing (CORS)
* - https://pokeapi.co/
* - https://darksky.net/dev
* - Proxy
* - Хранение API ключей и секретов
* - https://lpj-weather-service.herokuapp.com/
*/

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(r => r.json())
    .then(console.log);