// [*]
let myName = "Lianny";
let birthCity = "Natal";
let birthYear = 1998;
// console.log(myName, birthCity, birthYear)

// [*]
let base = 5;
let height = 8;
let area = base * height;
let perimeter = (base * 2) + (height * 2);
// console.log(base, height, area, perimeter)

// [*]
// let nota = 65;
// if (nota >= 80){
//     console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
// } else if (nota < 80 && nota >= 60){
//     console.log('Você está na nossa lista de espera.');
// } else {
//     console.log('Infelizmente, você reprovou.');
// }

// [*]
let currentHour = 20;
let message = '';
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém-passado";
}
// console.log(message)

// [*]
// let weekDay = 'COCO';
// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
//     console.log('Oba, mais um dia de aprendizado na Trybe >:D');
// } else {
//     console.log('FINALMENTE, descanso merecido UwU!');
// }

// [*]
let status = 'lista';
switch (status) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break

    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break

    case 'reprovada':
        console.log('Infelizmente, você reprovou')
        break

    default: 
    console.log('Informação incorreta.')
}