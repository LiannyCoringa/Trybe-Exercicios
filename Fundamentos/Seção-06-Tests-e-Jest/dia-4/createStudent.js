const createStudent = (nome) => {
    let objeto = {name: nome, feedback: frase()};
    return objeto;
};
const frase = () => {
    return 'Eita pessoa boa!';
};
module.exports = {createStudent, frase};