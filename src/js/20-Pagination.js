// ------ ПЛАН УРОКУ
// 1. Що таке пагінація, і нашо вона нам треба.

// const getEl = x => document.querySelector(x)
// let counter = 1
// function getData(){
//     fetch(`https://rickandmortyapi.com/api/character?page=${counter}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             const markup = data.results.map(item => `
//             <li class="item">
//             <img src=${item.image} alt="">
//             <p>NAME: ${item.name}</p>
//             <p>gender: ${item.gender}</p>
//             <p>status: ${item.status}</p>
//             <p>Created: ${item.created}</p>
//             <p>ID: ${item.id}</p>
//         </li>
// `).join('')
//             getEl('.itemList').insertAdjacentHTML('beforeend', markup)
//             counter++
//         })
// }
// getData()
//
// window.addEventListener('scroll', () => {
//     const {scrollHeight, scrollTop, clientHeight} = document.documentElement
//     // console.log(scrollHeight) // Висота всього документа в пікселях
//     // console.log(scrollTop)  // Скрол від верху в пікселях
//     // console.log(clientHeight) // Висота вьюпорта
//     // Scrollheight-clientheight===topheight
//     if(scrollHeight - clientHeight === scrollTop){
//         getData()
//     }
// })

// getEl('button').addEventListener('click', getData)

const input = document.querySelector (' .input');
const moveInput = () => {
    const inputWidth = input.offsetWidth;
    const inputHeight = input.offsetHeight;
    const winWidth = window.innerWidth - inputWidth;
    const winHeight = window.innerHeight - inputHeight;
    input.style.translate =`
${Math. floor (Math. random() * (winWidth + 1))}px 
${Math.floor (Math.random ( ) * (winHeight + 1))}px`
};
input.addEventListener ('mouseover', moveInput);
