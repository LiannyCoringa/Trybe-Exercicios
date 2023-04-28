const myFizzBuzz = require('./myFizzBuzz');

test('Verifica se o retorno é fizzbuzz quando o número é divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
})
test('Verifica se o retorno é fizz quando o número é divisível por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
})
test('Verifica se o retorno é buzz quando o número é divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
})
test('Verifica se o retorno é o próprio número se ele não for divisível por 3 e 5', () => {
    expect(myFizzBuzz(14)).toBe(14);
})
test('Verifica se o retorno é false se o número não for do tipo number', () => {
    expect(myFizzBuzz('3')).toBe(false);
})