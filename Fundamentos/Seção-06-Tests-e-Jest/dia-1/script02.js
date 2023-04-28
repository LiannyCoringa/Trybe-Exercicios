const studentRegister = (name, age) => {
    try {
        let mensagem = '';
        mensagem = `${name}, seja bem-vindo(a) à AuTrybe!`;
        verifyParameter(name, age);
        verifyAge(name, age);
        return mensagem;
    } catch(error) {
        return error.message;
    }
}

const verifyParameter = (name, age) => {
    if (name === undefined || age === undefined) {
        throw new Error('Todas as informações são necessárias');
    }
}
const verifyAge = (name, age) => {
    if (name !== undefined && age < 18) {
        throw new Error('Ops, infelizmente nesse momento vocẽ não pode fazer as aulas');
    }
}
console.log(studentRegister(25))