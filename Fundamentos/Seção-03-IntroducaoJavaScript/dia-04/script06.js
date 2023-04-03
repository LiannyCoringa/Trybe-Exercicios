// let numerosRomanos = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000
// }
// function romanos(numero, object){
//     if (numero.length === 1) {
//        return object[numero[0]];
//     } else if (numero.length >= 2) {
//         let sum = 0;
//         for (let index = 0; index < numero.length; index += 1) {
//             sum += object[numero[index]];
//         } return sum;
//     }
// } console.log(romanos('III', numerosRomanos))


// function arrayOfNumbers(variavel) {
//     let arrayPar = [];
//     for (let index = 0; index < variavel.length; index += 1) {
//         let numbers = variavel[index];
//         for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//             let current = numbers[index2];
//         if (current % 2 === 0) {
//             arrayPar.push(current);
//         }
//         }
//     } return arrayPar;
// }
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// console.log(arrayOfNumbers(vector))


let basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
function frutas(array) {
let frutas = [];
    for (let index = 0; index < array.length; index += 1) {
        if (!frutas.includes(array[index])) {
            frutas.push(array[index]);
        }
    } return frutas;
  } console.log(frutas(basket))

function quantidade(array) {
let quantidade = 0;
let quantidadeString = [];
let myFrutas = frutas(basket);
    for (let index = 0; index < myFrutas.length; index += 1) {
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (myFrutas[index] === array[index2]) {
                quantidade += 1;
            }
        } quantidadeString.push(quantidade);
        quantidade = 0;
    } return quantidadeString;
}
console.log(quantidade(basket));

function objetoFrutas(array) {
let myFrutas = frutas(basket);
let quantidades = quantidade(basket);
let objetoFrutas = {};
for (let key in myFrutas) {
    objetoFrutas[myFrutas[key]] = quantidades[key];
} return objetoFrutas;
}
console.log(objetoFrutas(basket))