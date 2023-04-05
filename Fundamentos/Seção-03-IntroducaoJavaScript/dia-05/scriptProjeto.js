// Requisito 01:
const girafa = true;
const elefante = true;
const macaco = false;
const cachorro = false;
const compareTrue = (bool1, bool2) => {
    let retorno = (typeof bool1 === true && typeof bool2 === true ? true : false);
    return retorno;
};
console.log(compareTrue())

// Requisito 02:
let oi = 'go Trybe';
let oi2 = 'vamo que vamo';
let oi3 = 'foguete';
const splitSentence = (frase) => {
    let palavras = frase.split(' ');
    return palavras;
};
console.log(splitSentence(oi3))

// Requisito 03:
let array1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let array2 = ['foguete', 'não', 'tem', 'ré'];
let array3 = ['capitan', 'my', 'capitan'];
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;
console.log(concatName(array3))

// Requisito 04:
const footballPoints = (wins, ties) => wins * 3 + ties;
console.log(footballPoints(0, 0))

// Requisito 05:
let myArray = [0, 0, 0];
const highestNumber = (array) => {
    let number = 0;
    for (let numero of array) {
        if (numero > number) {
            number = numero;
        };
        return number;
    };
};
const highestCount = (array) => {
    let highest = highestNumber(array);
    let quantity = 0;
    for (let numeroRepetido of array) {
        if (highest === numeroRepetido) {
            quantity += 1;
        }
    } return quantity;
}
console.log(highestCount(myArray))

// Requisito 06:
const calcTriangleArea = (base, height) => base * height / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
    let calcTriangle = calcTriangleArea(base, height);
    let calcRectangle = calcRectangleArea(base, height);
    let message = '';
    if (form === 'triângulo') {
        message = `O valor da área do ${form} é de: ${calcTriangle}`;
    } else if (form === 'retângulo') {
        message = `O valor da área do ${form} é de: ${calcRectangle}`;
    } else {
        message = `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
    }
    return message;
}
console.log(calcTriangleArea(10, 50));
console.log(calcRectangleArea(10, 50));
console.log(calcAllAreas(10, 50, 'triângulo'));
console.log(calcAllAreas(10, 50, 'retângulo'));
console.log(calcAllAreas(10, 50, 'quadrado'));

// Requisito 07:
const catAndMouse = (mouse, cat1, cat2) => {
    let firstCat = cat1 - mouse;
    let secondCat = cat2 - mouse;
    let shorterDistance = '';
    if (firstCat < secondCat) {
        shorterDistance = 'cat1';
    } else if (secondCat < firstCat) {
        shorterDistance = 'cat2'
    } else if (firstCat === secondCat) {
        shorterDistance = 'Os gatos trombam e o rato foge';
    }
    return shorterDistance;
}
console.log(catAndMouse(5, 12, 6))