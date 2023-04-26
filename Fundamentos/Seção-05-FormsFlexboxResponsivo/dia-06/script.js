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

const formInfos = document.querySelector('#form-data');
const nome = document.querySelector('#input-name');
const emails = document.querySelector('#input-email');
const house = document.querySelector('#house');
const familia = document.querySelector('input[name="family"]');
const materias = document.querySelectorAll('.subject');
const avaliação = document.querySelector('input[name="rate"]');
const formulario = document.querySelector('#evaluation-form');
const texto = document.querySelector('textarea');
formInfos.style.display = 'none';

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    for (let index = 0; index < materias.length; index += 1) {
        let materiasSelecionadas = '';
        materiasSelecionadas += `${materias[index]}, `;
        }

        let infos = [`Nome: ${nome.value}`, `Email: ${emails.value}`, `Casa: ${optionSelected}`, `Família: ${familia.value}`, `Matérias: ${materiasSelecionadas}`, `Avaliação: ${avaliação}`, `Observações: ${texto.value}`];
        for (let index = 0; index < infos.length; index += 1) {
            const parag = document.createElement('p');
            parag.innerText = infos[index];
            formInfos.appendChild(parag);
        }
})
// FALTA PEGAR OS SELECIONADOS;
// FALTA DESCOBRIR COMO APAGAR O FORM E ACRESCENTAR O INPUT;