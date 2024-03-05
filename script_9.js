// const myArray = [10, 25, 24, 12, 36];
// console.log(myArray)



// const cart = [21, 48, 78, 56, 30, 64, 43, 87,];
// let totalSum = 0;

// for (let number of cart) {
//     totalSum += number

//     console.log('total:' , totalSum);
// }


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for(let number of numbers){
//     if (number % 2 === 0) {
//         total += number
//     } else {
//         continue
//     }
// }
// console.log(total);



// const str = 'hello'
// const arrStr = str.split('')
// console.log(arrStr);

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];
// const reversArr = names.join(', ')
// console.log(reversArr)

// names.push('lera')
// console.log(names);
// names.pop()
// console.log(names);
// names.shift();
// console.log(names);
// names.unshift('marko');
// console.log(names);



// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

// const splicedName = names.splice(1, 2)
// console.log(splicedName);

// console.log(names.splice(4, 0, 'Marina', 'Egor'));
// console.log(names);

// names.splice(2, 1, 'Marina', 'Egor')
// console.log(names);





/**
 * /*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = friends.join(', ');
// console.log(string);

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'





/*
 * Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

// const str = 'JavaScript';
// let reversStr = '';
// const strArr = str.split('');
// for (let character of strArr) {
//     if (character === character.toLowerCase()) {
//         reversStr += character.toUpperCase();
//     } else {
//         reversStr += character.toLocaleUpperCase();
//     }
// }

// console.log(reversStr);






/*
 * Робимо slug в URL з назви стратті (приклад на dev.to)
 * Заголовок статті складається тільки з букв та пропусків
 *
 * - Нормалізуємо рядок
 * - Разбиваємо по словах
 * - Зшиваємо в рядок з розділителями
 * - Ченінг
 */


// Повинно вийти top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';
// console.log(title);

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const titleArr = normalizedTitle.split(' ');
// console.log(titleArr);

// const string = titleArr.join('-');
// console.log(string);

/*
 * Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
 * Заголовок статті складається тільки з букв та пропусків
 */

//const title = 'Top 10 benefits of React framework';
// top-10-benefits-of-React-framework
//const slugTitle = title.toLocaleLowerCase().split(' ').join('-');

const slugify = function (string) {
    const slugTitle = string.toLocaleLowerCase().split(' ').join('-');
    return slugTitle
}

console.log(slugify('Top 10 benefits of React framework'));
  console.log(slugify('Azure Static Web Apps are Awesome'));
  console.log(slugify('Technical writing tips for non-native English speakers'));



/*
 * Напиши скрипт який рахує суму елементів двух масивів.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
