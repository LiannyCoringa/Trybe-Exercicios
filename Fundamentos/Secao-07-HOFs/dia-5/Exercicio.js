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

// Exercico 4:
const student1 = {
    name: `Claudia`,
    lastName: `Farias`,
    age: 23,
  }

  const student2 = {
    name: `Vitor`,
    age: 20,
  }

const getLastName = ({lastName = 'lastName nao preenchido'}) => lastName;

  console.log(getLastName(student1));
  console.log(getLastName(student2));

// Exercicio 5:
const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
  const [student01, student02, student03] = moreStudents;
  const [student04, student05] = student02;
  const [student06, student07] = student03;


console.log(student01, student04, student05, student06, student07);