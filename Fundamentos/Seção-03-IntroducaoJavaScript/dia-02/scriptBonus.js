let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let meuArray = [];
let n = numbers.length;

// for (let k = 1; k < n; k += 1){
//     for (let index = 0; index < n - k; index += 1){
//         if (numbers[index] > numbers[index + 1]) {
//             aux = numbers[index];
//             numbers[index] = numbers[index + 1];
//             numbers[index + 1] = aux;
//         }
//     }
// }
// console.log(numbers)

// for (let k = 1; k < n; k += 1){
//     for (let index = 0; index < n - k; index += 1){
//         if (numbers[index] < numbers[index + 1]) {
//             aux = numbers[index];
//             numbers[index] = numbers[index + 1];
//             numbers[index + 1] = aux;
//         }
//     }
// }
// console.log(numbers)

for (let index = 0; index < n; index += 1){
    if (index !== n - 1) {
       meuArray.push(numbers[index] * numbers[index + 1])
    } else if (index === n - 1){
        meuArray.push(numbers[index] * 2)
    }
}
console.log(meuArray)



