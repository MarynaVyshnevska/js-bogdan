import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-servise';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    // console.log(form.elements);

    const searchQuery = form.elements.query.value;
    
  API.fetchPokemonById(searchQuery)
    // .then(pokemon => renderPokemonCard(pokemon)) Аналог
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

// рендерит
function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  console.log('It is CATCH');
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}

// ===============================================
//  ПАРАМЕТРЫ ЗАПРОСА И АУТЕНТИФИКАЦИЯ
// pokemon ? limit = 100000 & offset=0
// MediaQueryListEvent.com/api/pokemon?имя=значение&имя=значение доп настройки запроса
// 

// fetch(' https://pokeapi.co/api/v2/pokemon?limit=100000')
//   .then(r => r.json())
//   .then(console.log);

// нужно знать доп ключ
// Аутентификация
// https://newsapi.org
// https://pixabay.com/api/docs/
// https://weaterstack.com/



// fetch('https://pixabay.com/api/?key=31212742-df383ab72ff5d16a82f89e026&q=kyiv&image_type=photo')
//   .then(r => r.json())
//   .then(console.log);

// const url = 'https://newsapi.org/v2/everything?q=keyword';
// const options = {
//   headers: {
//     'X-Api-Key': '512bfcb4caa04f759540fc20d17a8364'
//   },
// }

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);

  // Библиотеки-обертки
  
  