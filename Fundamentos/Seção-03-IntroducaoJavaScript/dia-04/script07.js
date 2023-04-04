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
// console.log(allLessons)

function numberStudent(object, materias) {
    let sum = 0;
    for (let key in object) {
       if (object[key]['materia'] === materias) {
        sum += object[key]['numeroEstudantes'];
       }
    } return sum;
}
// console.log(numberStudent(allLessons, 'Matemática'))

function relatorio(object, teacher) {
  let arrayValue = Object.values(object);
  let numberStudent = 0;
  let materias = [];
  for (let index in arrayValue) {
    if (arrayValue[index]['professor'] === teacher) {
      materias.push(arrayValue[index]['materia']);
      numberStudent += arrayValue[index].numeroEstudantes;
    }
  }
    return { aulas: materias, estudantes: numberStudent };
}
function createReport(object, teacher) {
  let report = {};
  report.professor = teacher;
  Object.assign(report, relatorio(object, teacher));
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'))