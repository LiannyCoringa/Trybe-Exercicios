const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  // Adicione o código do exercício aqui:
//   01:
// const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  const result = books.find((objeto) => objeto.author.birthYear === 1947);
  return result.author.name;
}
console.log(authorBornIn1947());

// 02:
// const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook = books[0].name;
  let tamanho = books[0].name.length;
  books.forEach((objeto) => {
    if (objeto['name'].length < tamanho) {
        tamanho = objeto['name'].length;
        nameBook = objeto.name;
    };
});
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};
console.log(smallerName());

// 03:
// const expectedResult = {
//     author: {
//       birthYear: 1948,
//       name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
//   };

  const getNamedBook = () => {
    return books.find((objeto) => objeto.name.length === 26);
  };
  console.log(getNamedBook());

// 04:
// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((objeto) => objeto.author.birthYear >= 1900);
};
console.log(everyoneWasBornOnSecXX());

//  05:
// const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some((objeto) => objeto.releaseYear >= 1980 && objeto.releaseYear < 1990);
};
console.log(someBookWasReleaseOnThe80s());

// 06:
// const expectedResult = false;

const authorUnique = () => {
    let anoIgual = true;
    books.forEach((objeto) => {
        for (let index = 0; index < books.length; index += 1) {
            if (objeto.author.birthYear === books[index].author.birthYear) {
                anoIgual = false;
            };
        }
    }); return anoIgual;
};
console.log(authorUnique());