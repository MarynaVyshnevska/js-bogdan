const API_KEY = '512bfcb4caa04f759540fc20d17a8364';
const options = {
            headers: {
                Authorization: API_KEY,
            },
        };
const BASE_URL = 'https://newsapi.org/v2';

export default class MewsApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        console.log('Before enter', this);
        
        const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=8&page=${this.page}`;

        return fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.incrementPage();
                // примечания для верха. можно написать сразу рестуктуризировав
                // .then(response => response.json())
                // .then(({articles}) => {
                // this.incrementPage();
                // return articles;})


                console.log('After enterб усли все ок', this);
                // Для рисования статей на сайте использовать обозначения
                // из объекта статей в консоли articles, content, и тд

                
                return data.articles;
            });
    }

    // увеличивает страницу на 1
    incrementPage() {
        this.page += 1;
    }
// сбросить в исходное состояние
    resetPage() {
        this.page = 1;
    }
    // контроль запроса. Получить запрос
    get query() {
        return this.searchQuery;
    }
    // контроль запроса. Записать запрос
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}