// задача 1
const temperatureCelsius = 17; 
const temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;
console.log(`${temperatureCelsius} градусів Цельсія дорівнює ${temperatureFahrenheit} градусам Фаренгейта.`);


// задача 2
const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24; 
const minutesInMonth = hoursInMonth * 60; 
console.log(`У місяці з ${daysInMonth} днями є ${hoursInMonth} годин і ${minutesInMonth} хвилин.`);


// задача 3
let health = 100;
let energy = 100; 

health = -20;
energy = -20;

console.log(`Рівень здоров'я: ${health}`);
console.log(`Рівень енергії: ${energy}`);


// задача 4
const purchaseAmount = 80;
const discount = 0.10;
const discountedAmount = purchaseAmount - (purchaseAmount * discount);

console.log(`Сума покупки: ${purchaseAmount}`);
console.log(`Знижка 10%: -${purchaseAmount * discount}`);
console.log(`Сума після знижки: ${discountedAmount}`);


// задача 5
const floatingNumber = 58.475;
console.log(Math.floor(floatingNumber));


// задача 6

const numberString = "48.93";
console.log(parseFloat(numberString));


// задача 7
const numString = 38;
console.log(parseInt(numString));


// задача 8
const number = 60;
console.log(Math.sqrt(number));

// задача 9

const integerNumber = 18;
const stringNumber = "65";

const parsedInteger = parseInt(stringNumber);
const integerToString = integerNumber.toString();

console.log(`${parsedInteger}`);
console.log(`"${integerToString}"`);