// ----- ПЛАН УРОКУ
// 1. Що таке Promise і навіщо вони потрібні
// 2. Методи промісів then() catch() finally()
// 3. Методи класа Promise - all() race() resolve() rejected()

// let cake
// const birthday = new Promise((resolve, reject) =>{
//     const number = Math.random() > 0.5
//     setTimeout(()=>{
//         if(number){
//             cake = 'Тортик спекли :3'
//             resolve(cake)
//         }else{
//             cake = 'Тортик провтикали :с'
//             reject(cake)
//         }
//     },2500)
// })
//
// birthday
//     .then(data => document.querySelector('.container').innerHTML = `Ми святкуєм день народження з тортиком 🎂✅ + ${data}`)
//     .catch(error => document.querySelector('.container').innerHTML = `Ми святкуємо день народження без тортика 🎂❌ + ${error}`)
//     .finally(() => document.querySelector('.containerFinally').innerHTML = 'Ми відсвяткували день народження 🥳')

// const sleep = ms => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), ms)
//     })
// }
//
// Promise.all([sleep(1500),sleep(3500),sleep(5500)]).then(data => console.log('ALL FINISHED'))
// Promise.race([sleep(1500),sleep(3500),sleep(5500)]).then(data => console.log('Race FINISHED'))
// Promise.resolve('RESOLVED').then()
// Promise.reject('REJECTED').catch()

// function test(){
//     fetch('https://restcountries.com/v3.1/all')
//         .then(response => {
//             console.log(response)
//             if(!response.ok){
//                 throw new Error(response.statusText)
//             }
//             return response.json()
//         })
//         .then(data => {
//             console.log('MY DATA ->', data)
//             return data
//         }).then(data => {
//         console.log('THIRD THEN DATA ->', data)
//         let newFormat = {
//             id:1,
//             results: [...data]
//         }
//         return newFormat
//     }).then(data => console.log('New Format Data', data))
//         .catch(error => console.log(`Can't give you data, because - ${error}`))
// }
// test()
