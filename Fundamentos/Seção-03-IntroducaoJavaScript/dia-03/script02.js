let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function verificaString(cliente) {
    if (typeof cliente !== 'string') {
        return `O nome precisa ser uma string.`;
    } else {
        return true;
    }
}

function verificaCliente(cliente) {
    if (clientesTrybeBank.includes(cliente)) {
        return `${cliente} encontrado`;
    } else {
        return `${cliente} não encontrado`;
    }
}

function removeCliente(cliente) {
    let verificacao = verificaString(cliente);
  if (verificacao !== true) {
        return verificacao;
      }
    
    let verif = verificaCliente(cliente);
    if (verif !== `${cliente} encontrado`) {
        return verif;
    }

    let index = clientesTrybeBank.indexOf(cliente)
    clientesTrybeBank.splice(index, 1); 
        return `Cliente excluído com sucesso.`;
}
    console.log(removeCliente('John'))