const vqv = (nome, idade) => {
    let message = `Oi, meu nome é ${nome}! Tenho ${idade} anos, trabalho na Trybe e mando muito em programação! #VQV!`;
    if (!nome || !idade) {
        throw new Error('undefined');
    }
    return message;
};
module.exports = vqv;