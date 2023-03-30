let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function clientes(name) {
    if (typeof name === 'string'){
        clientesTrybeBank.push(name);
        return `Cliente adicionado com sucesso!`
    } else {
        return `O nome precisa ser uma String.`;
}
} console.log(clientes(5))
console.log(clientesTrybeBank)