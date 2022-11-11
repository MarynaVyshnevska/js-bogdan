import '../css/03-styles.css';
// // restcountries API about countries

// let country = 'ukraine'
// function test() {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json()).then(data => console.log(data));
// }

// test();

// https://rickandmortyapi.com/documentation/#rest

function getData() {
    fetch(`"https://rickandmortyapi.com/api/character"`)
        .then(response => response.json())
        .then(data => console.log(data));
};
getData();