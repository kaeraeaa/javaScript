// завдання 1

const textA = 'hello!';
const textB = '';

if (textA.length >0 && textB >0) {
    console.log('Обидва поля заповнені')
}
else {
    console.log('Не всі поля заповнені')
}


// завдання 2

const numberA = 7;
const numberB = 4;

if (numberA + numberB >10) {
    console.log('Сума більша за 10')
}
else{
    console.log('сума більша або дорівнює 10')
}

// завдання 3

const message = 'javascript';
const equalMessage = 'JavaScript';

if (message === equalMessage) {
    console.log('Текст містить слово JavaScript')
}
else {
    console.log('Текст не містить слово JavaScript')
}


// завдання 4
const number = 17;
if (number >10 && number <20) {
    console.log('Число входить в діапазон від 10 до 20')
}
else {
    console.log('Число не входить в діапазон від 10 до 20')
}

// завдання 5

const name = 'lera';
const email = 'kaeraea@gmail.com';
const password = '1234567';

if(name.length > 3 && email.includes('@') && email.includes('@.') && password.length >6) {
    console.log('Ви учпішно авторизувалися')
}
else {
    console.log('Помилка авторизації, спробуйте ще')
}