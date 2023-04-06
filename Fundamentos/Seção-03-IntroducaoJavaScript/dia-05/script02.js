// FUNÇÃO 01:
const substituaX = nome => {
    let x = nome;
    const frase = `Trybe ${x} aqui`;
    return frase;
}
console.log(substituaX('Bebeto'));

// FUNÇÃO 02:
const minhasSkills = (frase) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let concatenacao = `${frase}
Minhas três principais habilidades são:
        ${skills[0]}
        ${skills[1]}
        ${skills[2]}`;
    return concatenacao;
}
console.log(minhasSkills(substituaX('Bebeto')))