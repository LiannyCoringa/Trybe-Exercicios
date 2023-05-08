const criaEmail = (nomeCompleto) => {
   return {nomeCompleto, email: `${nomeCompleto}@trybe.com`};
};

const newEmployees = () => {
    const employees = {
      id1: criaEmail('PedroGuerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: criaEmail('LuizaDrumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: criaEmail('CarlaPaiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees())

  const sorteio = (myNumber, number) => myNumber === number;
  const numeroAleatorio = (myNumber, funcao) => {
    const number = Math.floor(Math.random() * 5) + 1;
    return funcao(myNumber, number);
  };
  const result = (funcao) => {
    if (funcao) {
        return "Parabens, voce ganhou";
    } else {
        return "Tente novamente";
    }
  };

  console.log(result(numeroAleatorio(4, sorteio)));

  const compara = (arrayCorreto, arrayResposta) => {
    let soma = 0;
    arrayResposta.forEach((resposta, questao) => {
        if (resposta === arrayCorreto[questao]) {
            soma += 1;
        } else if (resposta !== arrayCorreto[questao] && resposta !== 'N.A') {
            soma -= 0.5;
        }
    });
    return soma;
  };
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
  console.log(compara(RIGHT_ANSWERS, STUDENT_ANSWERS));

