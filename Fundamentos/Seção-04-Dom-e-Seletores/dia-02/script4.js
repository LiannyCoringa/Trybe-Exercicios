const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(h1);

const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

const parag = document.createElement('p');
parag.innerText = 'Nessa viagem, descobriremos culturas, diversidade e muita animação.';
section.appendChild(parag);

const sectionTwo = document.createElement('section');
sectionTwo.className = 'left-content';
main.appendChild(sectionTwo);

const sectionThree = document.createElement('section');
sectionThree.className = 'right-content';
main.appendChild(sectionThree);

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
sectionTwo.appendChild(img);

const list = document.createElement('ul');
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let index = 0; index < numbers.length; index += 1) {
    const listItem = document.createElement('li');
    listItem.innerText = numbers[index];
    list.appendChild(listItem);
}
sectionThree.appendChild(list);

for (let index = 1; index <= 3; index += 1) {
    const h3 = document.createElement('h3');
    h3.innerText = index;
    h3.className = 'description';
    main.appendChild(h3);
}

h1.className = 'title';
main.removeChild(sectionTwo);
sectionThree.style.marginRight = 'auto';
section.parentElement.style.backgroundColor = 'green';
list.lastElementChild.remove();
list.lastElementChild.remove();