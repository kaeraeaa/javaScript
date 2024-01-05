/*
 * Напиши скрипт який підраховує загальну суму зп працівників.
 * Кількість робітників зберігається в змінній employees.
 * ЗП кожного працівника це випадкове число від 500 до 5000
 * Записати суму в змінну totalSalary і вивести в консоль
 */

// 1. Створити змінні employees, totalSalary
// 2. пройтися по зп працівників n кількість разів
// 3. згенерувати для кожного працівника зп
// 4. додати зп кожного працівника
// 5. вивести totalSalary в консоль

const employees = 4;
let totalSalary = 0;
const minSalary = 500;
const maxSalary = 5000;

for (let i = 0; i < employees; i += 1) {
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
    console.log(`ЗП робітника ${i}: `, salary);

    totalSalary += salary;
}

console.log('Загальна ЗП ${employees} робітників: ', totalSalary)



const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if(i % 2 === 0) {
        total += i
    }
}

console.log('total: ' , total);