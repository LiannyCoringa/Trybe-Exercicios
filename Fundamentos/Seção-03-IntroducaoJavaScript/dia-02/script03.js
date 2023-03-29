// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1){
//     fatorial *= index;
// }
// console.log(fatorial);


// let word = 'Lianny';
// let palavra = '';
// for (let index = word.length - 1; index >= 0; index -= 1){
//     palavra += word[index];
// }
// console.log(palavra)

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];
let maiorPalavra = array[0];
for (let index = 1; index < array.length; index += 1){
    if (array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    } else if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]; 
    };
};
console.log(menorPalavra, maiorPalavra)