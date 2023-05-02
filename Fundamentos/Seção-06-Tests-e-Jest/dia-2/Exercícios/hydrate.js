const hydrate = (frase) => {
    let regex = /\d+/g;
    let numeros = frase.match(regex);
    let soma = 0;
    let message = '';
    for (let index = 0; index < numeros.length; index += 1) {
        soma += parseInt(numeros[index]);
    }
    if (soma > 1) {
        message = `${soma} copos de água`;
    } else {
        message = `${soma} copo de água`;
    } return message;
};
module.exports = hydrate;