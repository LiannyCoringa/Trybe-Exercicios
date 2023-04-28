const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const findPersonByName = (name) => {
    let retorno = '';
    try {
        for (let index = 0; index < clients.length; index += 1) {
            if (clients[index].name === name) {
                retorno = `Destinatário: ${name}. Endereço: ${clients[index].address.street}, ${clients[index].address.number}, ${clients[index].address.neighborhood}, ${clients[index].address.city} - ${clients[index].address.state}. ${clients[index].address.cep}`;
            }
            if (retorno === undefined) {
                throw new Error('Pessoa não encontrada, tente novamente.')
            }
        }
        return retorno;
    } catch(erro) {
        return erro.message;
    }
};

console.log(findPersonByName('Ana Santos'));

const findPersonByPosition = (position) => {
    try {
        let retorno = '';
        retorno = `Cliente: ${clients[position].name}. email: ${clients[position].email}.`;
        if (position > clients.length || position < 0) {
            throw new Error('Posição inválida, tente novamente');
        } return retorno;
    } catch(erro) {
        return erro.message;
    }
};
console.log(findPersonByPosition(6));

const findPeopleByState = (state) => {
  // seu código aqui
//   A função findPeopleByState recebe um estado por parâmetro e retorna um array contendo o nome das pessoas que moram naquele estado.
// Caso a função findPeopleByState localize nenhuma pessoa no estado, lance uma exceção com a mensagem 'Ops, nenhuma pessoa mora nesse estado, tente outro';
    try {
        let retorno = '';
        for (let index = 0; index < clients.length; index += 1) {
            if (clients[index].address.state === state) {
                retorno += `${clients[index].name}, `;
            }
        }
        if (retorno === '') {
            throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro');
        } return retorno;
    } catch(erro) {
        return erro.message;
    }
};
console.log(findPeopleByState('RJ'));