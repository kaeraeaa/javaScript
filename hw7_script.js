// Завдання 1

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Завдання 2

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
//   }
  
  // Завдання 3

  const number = 7;
  for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

// Завдання 4

// const numbers = [1, 2, 3, 4, 5];
// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }


// Завдання 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    break;
  }
  console.log(numbers[i]);
}

// Завдання 6

const n = 5; 
for (let i = 1; i < n; i++) {
  console.log(i);
  if (i >= n - 1) {
    break;
  }
}

// Завдання 7

// let i = 1;
// while (i <= 20) {
//   if (i % 3 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
//}
