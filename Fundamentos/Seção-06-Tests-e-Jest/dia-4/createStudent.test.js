const {createStudent, frase} = require('./createStudent');

test('Testa se o retorno esta correto', () => {
    expect(createStudent('Lianny')).toEqual({name: 'Lianny', feedback: 'Eita pessoa boa!'});
})