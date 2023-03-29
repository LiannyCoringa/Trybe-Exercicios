let n = 5;
let linha = '';

// for (let index = 1; index <= n; index += 1){
//     linha += '*';
// } 
// for (let index2 = 0; index2 < n; index2 += 1){
//     console.log(linha)
// }

// for (let index = 1; index <= n; index += 1){
//     linha += '*';
//     console.log(linha)
// }

let decrement = n -1;

for (let index = 0; index < n; index += 1) {
    for (let index2 = 0; index2 < n; index2 += 1){
    if (index2 < decrement) {
        linha += ' ';
    } else {
        linha += '*';
    }
}
    console.log(linha)
    linha = '';
    decrement -= 1;
} 



