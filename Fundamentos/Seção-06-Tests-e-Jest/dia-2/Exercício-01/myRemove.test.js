const myRemove = require('./myRemove.js');

it('Verifica se a função retorna o valor esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});