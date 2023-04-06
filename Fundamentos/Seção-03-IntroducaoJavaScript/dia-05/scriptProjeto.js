// // Requisito 01:
// const girafa = true;
// const elefante = true;
// const macaco = false;
// const cachorro = false;
// const compareTrue = (bool1, bool2) => {
//     let retorno = (typeof bool1 === true && typeof bool2 === true ? true : false);
//     return retorno;
// };
// console.log(compareTrue())

// // Requisito 02:
// let oi = 'go Trybe';
// let oi2 = 'vamo que vamo';
// let oi3 = 'foguete';
// const splitSentence = (frase) => {
//     let palavras = frase.split(' ');
//     return palavras;
// };
// console.log(splitSentence(oi3))

// // Requisito 03:
// let array1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// let array2 = ['foguete', 'não', 'tem', 'ré'];
// let array3 = ['capitan', 'my', 'capitan'];
// const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;
// console.log(concatName(array3))

// // Requisito 04:
// const footballPoints = (wins, ties) => wins * 3 + ties;
// console.log(footballPoints(0, 0))

// // Requisito 05:
// let myArray = [-2, -2, -2, -1];
// const highestNumber = (array) => {
//     let number = array[0];
//     for (let index = 1; index < array.length; index += 1) {
//         if (array[index] > number) {
//             number = array[index];
//         };
//         return number;
//     };
//   };
//   const highestCount = (array) => {
//     let highest = highestNumber(array);
//     let quantity = 0;
//     for (let numeroRepetido of array) {
//         if (highest === numeroRepetido) {
//             quantity += 1;
//         }
//     } return quantity;
//   }
// console.log(highestCount(myArray))

// // Requisito 06:
// const calcTriangleArea = (base, height) => base * height / 2;
// const calcRectangleArea = (base, height) => base * height;
// const calcAllAreas = (base, height, form) => {
//     let calcTriangle = calcTriangleArea(base, height);
//     let calcRectangle = calcRectangleArea(base, height);
//     let message = '';
//     if (form === 'triângulo') {
//         message = `O valor da área do ${form} é de: ${calcTriangle}`;
//     } else if (form === 'retângulo') {
//         message = `O valor da área do ${form} é de: ${calcRectangle}`;
//     } else {
//         message = `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
//     }
//     return message;
// }
// console.log(calcTriangleArea(10, 50));
// console.log(calcRectangleArea(10, 50));
// console.log(calcAllAreas(10, 50, 'triângulo'));
// console.log(calcAllAreas(10, 50, 'retângulo'));
// console.log(calcAllAreas(10, 50, 'quadrado'));

// // Requisito 07:
// const catAndMouse = (mouse, cat1, cat2) => {
//     let firstCat = cat1 - mouse;
//     let secondCat = cat2 - mouse;
//     let shorterDistance = '';
//     if (firstCat < secondCat) {
//         shorterDistance = 'cat1';
//     } else if (secondCat < firstCat) {
//         shorterDistance = 'cat2'
//     } else if (firstCat === secondCat) {
//         shorterDistance = 'Os gatos trombam e o rato foge';
//     }
//     return shorterDistance;
// }
// console.log(catAndMouse(5, 12, 6))

// // Requisito 08:
// const divisor3 = (array) => {
//     let numerosDiv3 = []
//     for (let number of array) {
//         if (number % 3 === 0) {
//             numerosDiv3.push(number);
//         }
//     } return numerosDiv3;
// }
// const divisor5 = (array) => {
//     let numerosDiv5 = []
//     for (let number of array) {
//         if (number % 5 === 0) {
//             numerosDiv5.push(number);
//         }
//     } return numerosDiv5;
// }
// const divisor3e5 = (array) => {
//     let array3 = divisor3(array);
//     let array5 = divisor5(array);
//     let array3e5 = [];
//     for (let number of array3) {
//         for (let number2 of array5) {
//             number === number2 && array3e5.push(number);
//         }
//     } return array3e5;
// }
// const separa3 = (array) => {
//     let array3 = divisor3(array);
//     let array3e5 = divisor3e5(array);
//     let apenas3 = [];
//     for (let index = 0; index < array3.length; index += 1) {
//         if (!array3e5.includes(array3[index])) {
//             apenas3.push(array3[index]);
//         }
//     } return apenas3;
// }
// const separa5 = (array) => {
//     let array5 = divisor5(array);
//     let array3e5 = divisor3e5(array);
//     let apenas5 = [];
//     for (let index = 0; index < array5.length; index += 1) {
//         if (!array3e5.includes(array5[index])) {
//             apenas5.push(array5[index]);
//         }
//     } return apenas5;
// }
// const fizzBuzz = (array) => {
//     let mensagem = [];
//     let divisores3 = divisor3(array);
//     let divisores5 = divisor5(array);
//     let divisores3e5 = divisor3e5(divisores3, divisores5);
//     let apenas3 = separa3(divisores3, divisores3e5);
//     let apenas5 = separa5(divisores5, divisores3e5);
//     for (let numero of array) {
//         if (divisores3e5.includes(numero)) {
//             mensagem.push('fizzBuzz');
//         } else if (apenas3.includes(numero)) {
//             mensagem.push('fizz');
//         } else if (apenas5.includes(numero)) {
//             mensagem.push('buzz');
//         } else {
//             mensagem.push('bug!');
//         }
//     } return mensagem;
// }
// let meuArray = [9, 25];
// console.log(divisor3(meuArray))
// console.log(divisor5(meuArray))
// console.log(divisor3e5(meuArray))
// console.log(separa3(meuArray));
// console.log(separa5(meuArray))
// console.log(fizzBuzz(meuArray));

// // Requisito 09:
// let string = 'hi there!';
// let string2 = 'h3, th2r2!'
// const encode = (frase) => {
//     const codigo = {
//       a: 1,
//       e: 2,
//       i: 3,
//       o: 4,
//       u: 5
//     };
//     let arrayObject = Object.keys(codigo);
//     let retorno = '';
//     let caracteres = frase.split('');
//     for (let index = 0; index < caracteres.length; index += 1) {
//       if (arrayObject.includes(caracteres[index])) {
//         retorno += codigo[caracteres[index]];
//       } else {
//         retorno += caracteres[index];
//       }
//     } return retorno;
// }
// console.log(encode(string))
// const decode = (frase) => {
//     const codigo = {
//      1: 'a',
//      2: 'e',
//      3: 'i',
//      4: 'o',
//      5: 'u',
//     };
//     let arrayObject = Object.keys(codigo);
//     let retorno = '';
//     let caracteres = frase.split('');
//     for (let index = 0; index < caracteres.length; index += 1) {
//       if (arrayObject.includes(caracteres[index])) {
//         retorno += codigo[caracteres[index]];
//       } else {
//         retorno += caracteres[index];
//       }
//     } return retorno;
// }
// console.log(decode(string2))

// Requisito 10:
let myArray = ['React', 'Jest', 'HTML', 'CSS', "JavaScript"];
let nomes = 'Lucas';
const techList = (array, nome) => {
    let arrayOrdenado = array.sort();
    let retorno = [];
    for (let index = 0; index < arrayOrdenado.length; index += 1) {
      retorno.push({
        tech: arrayOrdenado[index],
        name: nome
      })
    } return retorno;
  }
  console.log(techList(myArray, nomes))

  // Requisito 11:
  let meuArray = [0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4];
  const repeticao = (array) => {
    let quantity = 0;
    for (let index = 0; index < array.length; index += 1) {
      for (let index2 = 0; index2 < array.length; index2 += 1) {
        array[index] === array[index2] ? quantity += 1 : quantity += 0;
      }
      if (quantity >= 3) {
        break;
      } else {
      quantity = 0;
      }
    } return quantity;
  }
  const erros = (array) => {
    let repetidos = repeticao(array);
    let message = true;
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 || array[index] > 9 || repetidos >= 3) {
      message = false;
      break;
      } else {
        message;
      }
    } return message;
  }
  const generatePhoneNumber = (array) => {
  let erroMessage = erros(array);
  let message = ''
  if (array.length < 11) {
    message = 'Array com tamanho incorreto.';
  } else if (array.length === 11) {
    if (erroMessage === false) {
      message = 'não é possível gerar um número de telefone com esses valores';
    } else if (erroMessage === true) {
      message = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
    }
  } return message;
}

console.log(generatePhoneNumber(meuArray))