// Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  const expectedResult = 20;
  const countA = () => {
    const arrayLetras = names.join('').toLowerCase().split('');
    return arrayLetras.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0);
  };
  console.log(countA())

// Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes.

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
// const expectedResult = [
//  { name: 'Pedro Henrique', average: 7.8 },
//  { name: 'Miguel', average: 9.2 },
//  { name: 'Maria Clara', average: 8.8 },
// ];
const media = (acc, curr) => acc + curr;
const studentAverage = () => {
  return students.map((element, index) => {
    return { name: element, average: (grades[index].reduce(media, 0)) / 5 }
  });
};
console.log(studentAverage());