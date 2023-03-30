let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function verificaString(cliente) {
    if (typeof cliente !== 'string') {
        type = false;
        return `O nome precisa ser uma string.`;
    } else {
        return true;
    }
}

function verificaCliente(cliente) {
    if (clientesTrybeBank.includes(cliente)) {
        return `${cliente} encontrado`;
    } 
}

function removeCliente(cliente) {
    let verificacao = verificaString(cliente);
  if (verificacao !== true) {
        return verificacao;
      }

    let verifCliente = verificaCliente(cliente);
    if (verifCliente !== `${cliente} encontrado`){
        return "Cliente não encontrado"
    }
    let index = clientesTrybeBank.indexOf(cliente)
    clientesTrybeBank.splice(index, 1); 
        return `Cliente excluído com sucesso.`;
}
    console.log(removeCliente(5))