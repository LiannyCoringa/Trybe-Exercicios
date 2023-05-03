const average = require('./average');

test('Testa o erro se for do tipo string', () => {
    let myArray = [1, 2, '3', 4];
    expect(() => {average(myArray)}).toThrow(new Error('undefined'));
});