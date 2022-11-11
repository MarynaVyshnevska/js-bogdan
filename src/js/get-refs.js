export default function getRefs() {
    const refs = {
        cardContainer: document.querySelector('.js-card-container'),
        searchForm: document.querySelector('.js-search-form'),
    };
    return refs;
}


// Можно переменную refs не использовать, и тогда не использовать
// префикс  refs. в остальном коде. Это будет тогда выглядеть так:
// export default function getRefs() {
//     return {
//         cardContainer: document.querySelector('.js-card-container'),
//         searchForm: document.querySelector('.js-search-form'),
//     };
// }
