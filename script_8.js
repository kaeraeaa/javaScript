// 1. Вивести в консоль числа від 1 до 5 всіма циклами

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// let num = 1;
// while (num < 6) {
//     console.log(num);
//     num += 1
// }

// let num = 1;
// do {
//     console.log(num);
//     num += 1;
// } while (num < 6)

// 2. Написати скрипт який буде перевіряти середній бал успішності учня.
// Прервати роботу циклу, коли середній бал буде меньше 7.

// const min = 1;
// const max = 10;

// for (let i = max; i > 7; i -= 1) {
//     console.log(i)
// }


// 3. Виведіть в консоль всі непарні числа за допомогою циклу for

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }


// 4. Напиши цикл, який пропонує в prompt ввести число, більше 100. 
// Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.
// Цикл повинен питати число поки відвідувач не введе число, більше 100, або 
// не натисне кнопку Відміна (ESC).

//Напиши цикл, який пропонує в prompt ввести число, 
//більше 100. Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.

let number = 101

for (let i = 100; i > number;) {
number = Number(prompt('введіть число більше 100'))
console.log(number);
}
