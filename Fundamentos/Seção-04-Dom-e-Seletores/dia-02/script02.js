const irmão = document.createElement('h3');
irmão.innerHTML = "<b>Hello World<b>";
const pai = document.getElementById('pai');
pai.appendChild(irmão);

const filho = document.createElement('p');
filho.innerText = "Essa é uma página dinâmica.";
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(filho);

const primeiroFilhoDoFilhoDoFilho = document.createElement('ul');
primeiroFilhoDoFilhoDoFilho.innerHTML = 'Coisas felizes';
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);

const terceiroFilho = primeiroFilhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling;