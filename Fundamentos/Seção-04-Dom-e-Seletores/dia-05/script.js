const criaDivs = () => {
  const colorPalette = document.getElementById('color-palette');
  for (let index = 1; index <= 4; index += 1) {
      const divs = document.createElement('div');
      divs.className = 'color';
      colorPalette.appendChild(divs)
  }
}
criaDivs();

const paletteOne = document.querySelector('.color');
const paletteTwo = paletteOne.nextElementSibling;
const paletteThree = paletteTwo.nextElementSibling;
const paletteFour = paletteThree.nextElementSibling;

paletteOne.style.backgroundColor = 'black';
const divs = document.querySelectorAll('.color');
for (let index = 1; index < divs.length; index += 1) {
    divs[index].style.backgroundColor = JSON.parse(localStorage.getItem(`backgroundColor${index + 1}`));
}

const button = document.getElementById('button-random-color');
button.addEventListener('click', () => {
    let blackPalette = 'rgb(0, 0, 0)';
    let firstPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})` ;
    let secondPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
    let thirdPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
    if (secondPalette === firstPalette || thirdPalette === secondPalette || secondPalette === blackPalette) {
        secondPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
    } else if (firstPalette === blackPalette) {
        firstPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
    } else if (thirdPalette === firstPalette || thirdPalette === blackPalette) {
        thirdPalette = `rgb(${Math.random() * 350}, ${Math.random() * 350}, ${Math.random() * 350})`;
    } else {
        firstPalette;
        secondPalette;
        thirdPalette;
    }
    localStorage.setItem('backgrondColor1', 'black');
    localStorage.setItem('backgroundColor2', JSON.stringify(firstPalette));
    localStorage.setItem('backgroundColor3', JSON.stringify(secondPalette));
    localStorage.setItem('backgroundColor4', JSON.stringify(thirdPalette));
    location.reload();
    })

