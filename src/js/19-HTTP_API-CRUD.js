// ----- ПЛАН УРОКУ
// 1. Що таке HTTP? Навіщо він потрібен?
// 2. HTTP vs HTTPS
// 3. REST API
// 4. HTTP Methods та формати запитів
// 5. Види API (публічні та не публічні)
// 6. Параметри запитів (class URLSearchParams)

// hypertext transfer protocol - HTTP
// 0. Створення запиту - fetch (запит створення)
// 1. Запит найближчого DNS серверу
// 2. Встановлення з'єднання з сервером
// 3. Відправлення запиту нга сервер
// 4. Очікування відповіді
// 5. Отримання відповіді

// Формат для REST запиту має декілька складових:
// 1. HTTP-Method - HTTP, HTTPS + Method для дії
// 2. HTTP-headers - службова інформація від браузера для бекенду (в більшості ситуацій нам не цікавий)
// 3. Шлях (path) - просто адрес куди ми звертаємось
// 4. Тіло - блок з данними в запиті

// HTTP Methods:
// 1. POST - створити або додати данні
// 2. GET - отримати данні
// 3. PUT - оновити конкретний існуючий елемент, або додати якщо він не існує
// 4. PATCH - оновити конкретний існуючий елемент
// 5. DELETE - видалити елемент

// let country = 'germany'
// function test(){
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json()).then(data => console.log(data))
// }
// test()

function getData() {
    fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json())
        .then(data => {
            const { results: dataArray } = data;
            const markup = dataArray.map(item => 
                `<li>
                    <img src=${item.image} alt=${item.name}>
                    <p>NAME: ${item.name}</p>
                    <p>GENDER: ${item.gender}</p>
                    <p>ID: ${item.id}</p>
                    <p>STATUS: ${item.status}</p>
                    <p>CREATED: ${item.created}</p>
                </li>
                `)
            document.querySelector('characterList').innerHTML = markup;
        })
            
}

getData()




// function getData(){
//     fetch('https://rickandmortyapi.com/api/character/?count=30')
//         .then(response => response.json())
//         .then(data => {
//             const {results: dataArray} = data
//             const markup = dataArray.map(item => `
//     <li>
//         <img src=${item.image} alt="">
//         <p>NAME: ${item.name}</p>
//         <p>GENDER: ${item.gender}</p>
//         <p>ID: ${item.id}</p>
//         <p>STATUS: ${item.status}</p>
//         <p>CREATED: ${item.created}</p>
//     </li>
// `).join('')
//             document.querySelector('.characterList').innerHTML += markup
//         })
// }
// getData()

