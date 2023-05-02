const { encode, decode } = require('./encodeDecode');

describe('Testa as funções encode', () => {
    test('Verifica se encode é função', () => {
        expect(typeof encode).toEqual('function');
    })
    test('Verifica se a, e, i, o, u são transformadas em 1, 2, 3, 4, 5', () => {
        expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5');
    })
    test('Verifica o tamanho das strings', () => {
        expect(encode('lili').length).toEqual(4);
    })
})

describe('Testa as funções decode', () => {
    test('Verifica se decode é função', () => {
        expect(typeof decode).toEqual('function');
    })
    test('Verifica se 1, 2, 3, 4, 5, são transformados em vogais a, e, i, o, u', () => {
        expect(decode('1', '2', '3', '4', '5')).toEqual('a', 'e', 'i', 'o', 'u');
    })
    test('Verifica o tamanho das strings', () => {
        expect(decode('lili').length).toEqual(4);
    })
})
