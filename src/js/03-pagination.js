/*
 * - Пагинация
 * - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Рисуем статьи
 * - Сброс значения при поиске по новому критерию
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */
import '../css/03-styles.css';
import articlesTpl from '../templates/articles.hbs';
import NewsApiService from './news-service';
import LoadMoreBtn from './components/load-more-btn';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    // спрячем кнопку 
    hidden: true,
});

// console.log(newsApiService);
console.log(loadMoreBtn);

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);
//***  loadMoreBtn.refs.button.addEventListener('click', fetchArticles());


function onSearch(evt) {
    evt.preventDefault();

    // Очистка контейнера от прежнего запроса
    clearArticlesContainer();
    // термин запроса, где query - название name in html (name="query")
    newsApiService.query = evt.currentTarget.elements.query.value;

    if (newsApiService.query === '') {
        return alert('Введи что-нибудь для запроса');
    }
    
    // показали активную кнопку и сразу деактивировали при загрузке контента
    loadMoreBtn.show();

    newsApiService.resetPage();

    // **
    loadMoreBtn.disable();

    // віводим новіе статьи, then(articles) будем их отрисовівать, это церляется
    // к результату вывода промиса в файле ньюс-сервис (articles => console.log(articles))
    newsApiService.fetchArticles()
        .then(articles => {
            clearArticlesContainer();
            appendArticlesMarkup(articles);
            loadMoreBtn.enable(); //активная кнопка после загрузки
        });
    // **
}
// *
function onLoadMore() {
    loadMoreBtn.disable();
    newsApiService.fetchArticles()
        .then(articles => {
            appendArticlesMarkup(articles);
            loadMoreBtn.enable();
        });
}
// *

// віводим новіе статьи, then(articles) будем их отрисовівать, это церляется
    // к результату вывода промиса в файле ньюс-сервис (articles => console.log(articles))
function appendArticlesMarkup(articles) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}
// При каждои новом запросе очистить контейнер
function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
}

// // * можно собрать одинаковый фрагмент в одну функцию
// // loadMoreBtn.disable();
// //     newsApiService.fetchArticles()
// //         .then(articles => {
// //             appendArticlesMarkup(articles);
// //             loadMoreBtn.enable();
// //         });

// // тогда получится так
// function fetchArticles() {
//     loadMoreBtn.disable();
//     newsApiService.fetchArticles()
//         .then(articles => {
//             appendArticlesMarkup(articles);
//             loadMoreBtn.enable();
//         });
// }
// // можно просто оставить fetchArticles();
// function onLoadMore() {
//     fetchArticles();
// }

// // и в итоге просто
// fetchArticles();

// // **
//     clearArticlesContainer();
//     fetchArticles();
// // **