const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const buttonEntrar = document.querySelector('#buttonEntrar');

buttonEntrar.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
})

const buttonSubmit = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
buttonSubmit.disabled = true;
checkbox.addEventListener('click', () => {
        buttonSubmit.disabled = false;
})

const textarea = document.querySelectorAll('#textarea');
const contador = document.querySelector('#counter');
let max = 500;
textarea[1].addEventListener('keydown', () => {
    let caracteres = textarea[1].value.length;
    let resta = max - caracteres;
    contador.innerHTML = resta;
})