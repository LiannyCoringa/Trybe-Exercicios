let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };

  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function addProperty(object, key, value) {
    return object[key] = value;
};
addProperty(lesson2, 'turno', 'noite');

function listKey(object) {
    let arrayKey = Object.keys(object);
    return arrayKey;
};
listKey(lesson1);

function lengthObject(object) {
    let arrayEntries = Object.entries(object);
    return arrayEntries.length;
}
lengthObject(lesson3);

function listValues(object) {
    let arrayValues = Object.values(object);
    return arrayValues;
}
listValues(lesson2);

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons)

function numeroDeEstudantes(object) {
    let sum = 0;
    let keys = Object.keys(object);
    for (let key in keys) {
        sum += object[keys[key]].numeroEstudantes;
    }
    return sum;
}
console.log(numeroDeEstudantes(allLessons));

function positions(object, position) {
    let array = Object.keys(object);
      return object[array[position]];
}
console.log(positions(lesson1, 2))

function verificacao(object, key, value) {
    let arrayKey = Object.keys(object);
    let arrayValue = Object.values(object);
    let isEqual = false;
    if (arrayKey.includes(key) && arrayValue.includes(value)) {
        if (arrayKey.indexOf(key) === arrayValue.indexOf(value)) {
        isEqual = true; }
    } return isEqual;
} console.log(verificacao(lesson3, 'materia', 'Maria Clara'))