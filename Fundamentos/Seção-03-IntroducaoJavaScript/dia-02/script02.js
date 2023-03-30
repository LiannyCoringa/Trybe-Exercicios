let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maiorNumber = 0;
let menorNumber = numbers[0];
let numberImpar = 0;


// for (let number of numbers){
//     // console.log(number);
//     // sum += number;
// }; 
// console.log(sum);
// console.log(sum / numbers.length)

// let media = sum / numbers.length;
// if (media > 20) {
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor ou igual a 20');
// }

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorNumber){
//         maiorNumber = numbers[index];
//     };
// };
// console.log(maiorNumber)


// for (let index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] % 2 !== 0){
//         numberImpar += 1;
//     };
// };

// if (numberImpar <= 0){
//     console.log('Nenhum valor ímpar encontrado');
// } else if (numberImpar > 0){
//     console.log(numberImpar);
// }

// for (let index = 1; index < numbers.length; index += 1){
//     if (numbers[index] < menorNumber){
//         menorNumber = numbers[index];
//     };
// }; 
// console.log(menorNumber)

let meuArray = [];
for (let index = 1; index <= 25; index += 1) {
    meuArray.push(index);
};

for (let index2 = 0; index2 < meuArray.length; index2 += 1){
    console.log(meuArray[index2] / 2)
}
// console.log(meuArray)