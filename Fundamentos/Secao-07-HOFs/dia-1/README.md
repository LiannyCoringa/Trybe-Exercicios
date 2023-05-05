Exercicios:

01. Exercicio.js:
    crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;
    utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

    Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

    Crie uma HOF que recebera de parametro: O primeiro será um array de respostas corretas (soluções); O segundo será um array contendo as respostas fornecidas por uma pessoa estudante; O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
    Uma resposta correta adiciona 1 ponto à pontuação final;
    A ausência de uma resposta não altera a pontuação (quando for “N.A”);
    Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
    Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante