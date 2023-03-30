// NÚMERO PRIMO
let number = 27;
let numberPrime = 0;


for(let index = 2; index < number; index += 1) {
    if (number % index === 0) {
        numberPrime += 1
    } }
    
    if (numberPrime === 0){
       console.log(`${number} é primo!`)
    } else {
        console.log(`${number} não é primo!`)
    }
