// 2.1
// let a = 9;
// let b = 5;
// let c = 24;


// 2.2
// if (a > b){
//     console.log(`O valor ${a} é maior`);
// } else {
//     console.log(`O valor ${b} é maior`);
// }


// 2.3
// if (a > b && a > c) {
//     console.log(`O valor ${a} é maior`);
// } else if (b > a && b > c) {
//     console.log(`O valor ${b} é maior`);
// } else {
//     console.log(`O valor ${c} é maior`);
// }


// 2.4
// let value = 0;
// if (value > 0) {
//     console.log('Positivo');
// } else if (value < 0) {
//     console.log('Negativo');
// } else {
//     console.log('Zero');
// }


// 2.5
// let angA = 59;
// let angB = 25; 
// let angC = 96;
// let message = "Erro"
// if (angA + angB + angC === 180){
//     console.log(true);
// } else if (angA === null || angB === null || angC === null) {
//     console.log(message);
// } else {
//     console.log(false);
// }


// 2.6
// let peça = 'torre';
// switch (peça) {
//     case "peão":
//         console.log(`Movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás`);
//         break;

//     case "torre":
//         console.log(`Movimenta-se em direção reta pelas colunas ou fileiras`);
//         break;

//     case "cavalo":
//         console.log(`Movimenta-se sempre em "L",ou seja,duas casas para frente e uma para a esquerda ou direita`);
//         break;
        
//     case "rainha":
//         console.log(`É a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor`);
//         break;

//     case "rei":
//         console.log(`Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance`);
//         break;
// }


// 2.7
// let nota = '50%';
// if (nota >= '90%') {
//     console.log('A');
// } else if (nota < '90%' && nota >= '80%') {
//     console.log('B');
// } else if (nota < '80%' && nota >= '70%') {
//     console.log('C');
// } else if (nota < '70%' && nota >= '60%') {
//     console.log('D');
// } else if (nota < '60%' && nota >= '50%') {
//     console.log('E');
// } else {
//     console.log('F');
// }


// 2.8
// let number1 = 1;
// let number2 = 5;
// let number3 = 7;
// if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false)
// }


// 2.9 
// let number1 = 6;
// let number2 = 2;
// let number3 = 4;
// if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// 2.10 
// let custo = 12;
// let venda = 100;
// let qntdVenda = 100;
// if (qntdVenda === 1000) {
//     let lucro = (venda - custo) * 1000;
//     console.log(lucro);
// } else {
//     console.log(`Não há 1000 produtos`);
// }


// 2.11
let salario = 3000.00;
let inss = 0;

if (salario <= 1556.94) {
    inss += (0.8 * salario);
} else if (salario <= 2594.92 && salario > 1556.94) {
    inss += (0.9 * salario);
} else if (salario <= 5189.82 && salario > 2594.92) {
    inss += (0.11 * salario);
} else {
    inss += 570.88
}

let salarioInss = salario - inss;
let IR = 0;

if (salarioInss > 1903.98 && salarioInss <= 2826.65) {
    IR += (0.075 * salarioInss) - 142.80; 
} else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
    IR += (0.15 * salarioInss) - 354.80;
} else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
    IR += (salarioInss * 0.225) - 636.13;
} else {
    IR += (0.275 * salarioInss) - 869.36;
}

let salarioLiquido = salarioInss - IR; 
console.log(salarioLiquido)