// const fnA = function (cb) {
//     const a = 5
//     const b = 10
//     cb(a)
// }

// const fnB = function (number) {
//     console.log(number);
// }
// console.log(fnA(fnB));


// const numbers = [5, 10, 15, 20, 25];
// let total = 0

// numbers.forEach(function(number) {
//     total += number
//     console.log('число всередині колбекуЖ ', number);

// })

// console.log('total: ', total);



// const number = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map((number) => {
//     return number * 2
// }) 

// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//     ];

//     const playerIdToUpdate = 'player-3'
//     const updatePlayers = players.map((player) => {

    //     if (player.id === playerIdToUpdate) {
    //         return {
    //             ...player,
    //             timePlayed: player.timePlayed + 100
    //         } else {
    //             return {
    //                 ...player
    //             }
    //         }
    //     }
    // })

    // console.log(updatePlayers);
    
    // console.table(players);

    //const playerNames = players.map((player) => {
        //console.log(player);
        //return player.name
    //})

    //console.log('playerNames', playerNames);

    /*
* Збільшуємо кількість поінтів кожного гравця на 10 (розпорошуємо старий об'єкт)
*/

// const updatePlayers = players.map((player) => {
//     return {
//         ...player,
//         points: player.points + 10  
//     }
// })

// console.log(updatePlayers);

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
    ];
    
    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.quantity
    })
    
    console.log(total);

    const newCart = cart.map((item) => {
        return {
            ...item,
            quantity: item.quantity + 1
        }
    })
    console.log(newCart);