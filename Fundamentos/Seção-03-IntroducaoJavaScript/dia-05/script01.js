let botao = 'desligado'
const motor = (botaoLigaDesliga) => (botaoLigaDesliga === 'ligado' ? botaoLigaDesliga = 'desligado' : botaoLigaDesliga = 'ligado');
console.log(motor(botao));


let pi = 3.14;
raio = 8;
const area = (pi, raio) => pi * (raio * 2);
console.log(area(pi, raio))


const longestWord = (frase) => {
    let array = frase.split(' ');
    let tamanho = 0;
    let palavraMaior = '';
    for (let palavra of array) {
        if (palavra.length > tamanho) {
            tamanho = palavra.length;
            palavraMaior = palavra;
        }
    } return palavraMaior;
}
console.log(longestWord(`Lianny é muito maravilhinha e fofa`));