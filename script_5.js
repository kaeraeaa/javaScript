/*
 * Напиши скрипт вибору готеля по кількості зірок.
 * 1,2 - 20$,  3,4 - 50$,  5 - 120$
 *
 * Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
 * 'Токої кількості зірок немає'
 */

//  const stars = 5;
//  let price;

//  if( stars === 1){
//     price = '10$'
//     console.log(`Ціна за номер в готелі ${price}$`);
//  } else if (stars === 2) {
//     price = 20
//     console.log()
//  }

// if( stars === 1){
//     price = 10
// } else if (stars === 2){
//     price = 20
// } else if (stars === 3){
//     price = 30
// } else if (stars === 4){
//     price = 50
// } else if (stars === 5){
//     price = 120
// } else {
//     console.log('такої кількості зірок немає');
// }
// console.log(`Ціна за номер в готелі ${price}$`);

// switch (stars) {
//     case 1: 
//     price = '10$'
//     console.log(`Ціна за номер в готелі ${price}$`);
//         break;
//         case 2: 
//         price = '20$'
//         console.log(`Ціна за номер в готелі ${price}$`);
//             break;
//             case 3: 
//         price = '30$'
//         console.log(`Ціна за номер в готелі ${price}$`);
//         break;
//         case 3: 
//         price = '30$'
//         console.log(`Ціна за номер в готелі ${price}$`);
//         break;
//         case 4: 
//         price = '50$'
//         console.log(`Ціна за номер в готелі ${price}$`);
//         break;
//         case 5: 
//         price = '120$'
//         console.log(`Ціна за номер в готелі ${price}$`);
//         break;
//     default:
//         console.log('такої кількості зірок немає');
//         break;
// }


// const a = 5;

// if(true) {
//     const b = 10;
//     const a = 15;
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

let a = Number(prompt("Значення"));

switch (a) {
    case 0:
        console.log(0)
        break;

        case 1:
            console.log(1)
            break;

            case 2 || 3:
                console.log("2,3")
                break;
    default:
        console.log("default")
        break;
}