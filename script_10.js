// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));



/*
     * Напиши функцію filterNumbers(array [, number1, ...]) яка:
     * - першим аргументом приймає масив чисел
     * - після першого аргумента може бути довільна кількість інших аргументів які будуть числами,
     * - Функція повина повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого,
     *   для яких є аналог в оригінальному масив.
     */

const filterNumbers = function (array, ...args) {
    const equalNumbers = [];
    for (let number of args) {
       const isEqual = array.includes(number);
    if (isEqual) {
        equalNumbers.push(number);
      }  
    }
    return equalNumbers;
}
console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
    // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
    // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

