let saldo = 0;

function adcQuantia(valor) {
    saldo += valor;
    return `O saldo da sua conta é de ${saldo}`;
}
// console.log(adcQuantia(5000));

function subtrai(valor) {
    saldo -= valor;
    return `O saldo da sua conta, após a subtração, é de ${saldo}`;
}
// console.log(adcQuantia(5000), subtrai(400))

function multiplicacao(taxa) {
    saldo *= taxa;
    return `O saldo após a multiplicação é de R$ ${saldo}`;
}
// console.log(adcQuantia(5000), multiplicacao(3))

function divisao(valor) {
    saldo /= valor;
    return `O saldo após a divisão é de R$ ${saldo}`;
}
console.log(adcQuantia(5000), divisao(3))