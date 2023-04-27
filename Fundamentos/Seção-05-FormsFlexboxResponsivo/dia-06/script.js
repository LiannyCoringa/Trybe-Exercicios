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
const familia = document.querySelectorAll('input[name="family"]');
const materias = document.querySelectorAll('.subject');
const avaliação = document.querySelectorAll('input[name="rate"]');
const formulario = document.querySelector('#evaluation-form');
const texto = document.querySelector('textarea');

formInfos.style.display = 'none';

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let familiachecked = '';
    for (let index1 = 0; index1 < familia.length; index1 += 1) {
    if (familia[index1].checked) {
        familiachecked = familia[index1].value;
        }
    }
    let materiasSelecionadas = '';
    for (let index2 = 0; index2 < materias.length; index2 += 1) {
        if (materias[index2].checked) {
            materiasSelecionadas += `${materias[index2].value}, `;
        }
    }
    let avaliaçãoselecionada = '';
    for (let index3 = 0; index3 < avaliação.length; index3 += 1) {
        if (avaliação[index3].checked) {
            avaliaçãoselecionada = avaliação[index3].value;
        }
    }

    let infos = [`Nome: ${nome.value}`, `Email: ${emails.value}`, `Casa: ${house.value}`, `Família: ${familiachecked}`, `Matérias: ${materiasSelecionadas}`, `Avaliação: ${avaliaçãoselecionada}`, `Observações: ${texto.value}`];
    for (let index = 0; index < infos.length; index += 1) {
        const parag = document.createElement('p');
        parag.innerText = infos[index];
        formInfos.appendChild(parag);
    }
    formulario.style.display = 'none';
    formInfos.style.display = 'block';
})

// FALTA DESCOBRIR COMO APAGAR O FORM E ACRESCENTAR O INPUT;