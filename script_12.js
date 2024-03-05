
// const person = {
//     name: 'Hwa' ,
//     age: 15 ,
//     gender: 'nonbinary'
// }

// person.age = 16
// person.university = 'frontend'

// console.log(person);

// const playlist = {
//     name: 'Playlist' ,
//     rating: 5 ,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     changeName(newName) {
//        return this.name = newName
//     },
//     addTrack(track) {
//         this.tracks.push(track)
//     } ,
//     updateRating(newRating) {
//         this.rating = newRating
//     },
//     getTrackCount() {
//        return this.tracks.length
//     }
// }
// playlist.getTrackCount()
// playlist.updateRating(10);
// playlist.addTrack('track-4')
// playlist.changeName('Play List')
// console.log(playlist);



// const feedBack = {
//     good: 5,
//     neutral: 10,
//     bad: 3,

// }


// console.log(feedBack);


// const fnA = function (... args) {
//     console.log(args);
// }

// fnA(10)
// fnA(10, 20)
// fnA(25, 35, 45)


// const numbers = [1, 2, 3].concat([4, 5, 6],[7,8,9])
// console.log(numbers);

// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7,8,9]]
// console.log(numbers);

// const temps = [18, 14, 12, 21, 17, 29, 24];

// const lowestTemp = Math.min(...temps)

// console.log(lowestTemp);


/*
* Працюємо з колекцією товарів в кошику:
* - getItems()
* - add(product)
* - remove(productName)
* - clear()
* - countTotalPrice()
* - increaseQuantity(productName)
* - decreaseQuantity(productName)
*
* { name: '🍎', price: 50 }
* { name: '🍇', price: 70 }
* { name: '🍋', price: 60 }
* { name: '🍓', price: 110 }
*/

// const cart = {
//     items: [],
//     getItems() {
//         console.log(this.items);
//         return this.items
//     },
//     add(product) {
        
//         for (const item of this.items){
//             if (item.name === product.name) {
//                 item.quantity += 1
//                 return
//             } 
//         }

// const newProduct = {
//             ...product,
//             quantity: 1
//         }

//         this.items.push(newProduct)
//     },

//     remove(productName) {
//         let index;
//         for (const item of this.items) {
//             if (item.name === productName) { 
//             index = this.items.indexOf(item);
//             this.items.splice(index, 1);
            
//             }
//         }
//         return this.items;
//     },
//     clear() {},
//     countTotalPrice() {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
//     };

//   cart.add({ name: '🍎', price: 50})  
//   cart.add({ name: '🍇', price: 70})
//   cart.add({ name: '🍋', price: 60})
//   cart.add({ name: '🍓', price: 110})
//   cart.add({ name: '🍎', price: 50}) 

//   console.log(cart);
//   console.log(cart.getItems());
//   console.log(cart.remove('🍎'));
//   console.log(cart.remove('🍋'));


// const a = { x: 1, y: 2 };
// const b = { x: 5, c: 3 };

// const c = { ...a, ...b }

// console.log(c);
// {
//     x: 1,
//     y: 2,
//     c:3,
// }

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//     }
//     }

//  const {make, model, year, features, safety} = car;
//  const {airbags, antilock_brakes, stability_control} = safety
//  console.log(model, antilock_brakes);   


// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
//     };


// const personInfo = function({name, surname, age}) {
//     //const  {name, surname, age} = person
//     return `Мене звати ${name} ${surname} і мені ${age} років`
// }    
    
//     console.log(personInfo(person));


// const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//     };
    
//     const calculateAverageGrade = function({name, surname, grades}) {  
//         let avarageGrade = 0;
//         for(const grade of grade) {
//             avarageGrade += grade
//         }
//         avarageGrade 
//         return `Середній бал ${surname} буде ${avarageGrade /grades.length}`
//     }

//     console.log(calculateAverageGrade(student));



// Напишіть функцію, яка отримує
//  масив об'єктів з інформацією про товари (назва, ціна,
//  кількість) та використовує деструктуризацію для
//  обчислення загальної вартості товарів.


// const items = [
// { name: 'Футболка', price: 250, quantity: 2 },
// { name: 'Джинси', price: 800, quantity: 1 },
// { name: 'Кросівки', price: 1200, quantity: 1 }
// ];

// const calculateTotalCost = function(products) {
//     let totalCost = 0;
//     for (let product of products) {
//         const { price, quantity } = product
//         totalCost += price*quantity
//     }
//     return totalCost
// }

// console.log(calculateTotalCost(items))



// Задача 4

// Напишіть функцію, яка отримує об'єкт зі
//  списком електронних адрес (поле "emails")
//  та використовує деструктуризацію для
//   повернення першої адреси в цьому списку.


const person = {
name: 'John',
emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
};

const getFirstEmail = function({name, emails: [firstEmail] }) {
    return firstEmail
}

console.log(getFirstEmail(person))



// Напишіть функцію, яка отримує
//  об'єкт зі списком користувачів (поле "users"),
//   де кожен користувач є об'єктом з полями "ім'я" та "вік",
//    та використовує деструктуризацію для повернення 
//    списку користувачів, які старші за 18 років.

// const data = {
// users: [
// { name: 'John', age: 25 },
// { name: 'Jane', age: 17 },
// { name: 'Bob', age: 30 },
// { name: 'Alice', age: 20 }
// ]
// };

// const users = function(data) {

// }

// console.log(getAdultUsers(data)); // [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 20 }]