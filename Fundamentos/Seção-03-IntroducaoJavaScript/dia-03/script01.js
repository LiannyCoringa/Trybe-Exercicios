let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function clientes(name) {
    if (typeof name === 'string'){
        clientesTrybeBank.push(name);
        return `Cliente adicionado com sucesso!`
    } else {
        return `O nome precisa ser uma String.`;
}
}
// console.log(clientes(5))
// console.log(clientesTrybeBank)

function removeClientes(name) {
    if (typeof name === 'string' && clientesTrybeBank.includes(name)){
        clientesTrybeBank.splice(clientesTrybeBank.indexOf(name), 1);
        return `Cliente removido com sucesso!`
    } else {
        return `O nome precisa ser uma String e/ou nome não existente.`;
}
} 
console.log(removeClientes('Juliana'))
console.log(clientesTrybeBank)