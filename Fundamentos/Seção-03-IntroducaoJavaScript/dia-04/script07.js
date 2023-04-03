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

  let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});
console.log(allLessons)

function numberStudent(object, materias) {
    let sum = 0;
    for (let key in object) {
       if (object[key]['materia'] === materias) {
        sum += object[key]['numeroEstudantes'];
       }
    } return sum;
}
console.log(numberStudent(allLessons, 'Matemática'))

function relatorio (object, pessoa) {
    let objetoRelatorio = {};
    let aula = [];
    let estudante = object[key]['numeroEstudantes']
    for (let key in object) {
        if (object[key][professor] === pessoa) {
            objetoRelatorio['professor'] = pessoa;
            objetoRelatorio['aulas'] += aula.push(object[key]['materia']);
            objetoRelatorio['estudantes'] += estudante
        }
    }

    return objetoRelatorio;
}
console.log(relatorio(allLessons, 'Maria Clara'))