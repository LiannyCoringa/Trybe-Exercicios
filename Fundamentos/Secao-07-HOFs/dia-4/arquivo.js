// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Banana', 'Tangerina', 'Tamara', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Laranja', 'Uva', 'Kiwi'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));