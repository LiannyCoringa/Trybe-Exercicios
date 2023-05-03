const vqv = require('./vqv');

test('Testa se a funcao vqv retorna corretamente', () => {
    expect(vqv('Lianny', 24)).toBe(`Oi, meu nome é Lianny! Tenho 24 anos, trabalho na Trybe e mando muito em programação! #VQV!`);
});
test('Testa o erro undefined', () => {
    expect(() => {vqv()}).toThrow(new Error('undefined'));
})