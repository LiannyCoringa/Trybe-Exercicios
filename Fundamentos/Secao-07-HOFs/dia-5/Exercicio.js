// Exercicio 1:
const myList = [5, 2, 3];

const swap = ({first, second, third}) => [third, second, first];
console.log(myList)

// Exercicio 2:
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (array) => {
    const [Carro, Marca, Ano] = array
    return {
        Carro,
        Marca,
        Ano,
    };
};
console.log(toObject(palio))

// Exercicio 3:
const greet = (nome, saudacao = 'Hi') => `${saudacao} ${nome}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'