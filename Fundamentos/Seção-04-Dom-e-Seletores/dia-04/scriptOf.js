window.onload = () => {
  const backgroundColorButton = document.querySelectorAll('#background-color button');
  const backgroundColor = document.getElementById('background-color');
  const colors = document.querySelectorAll('#font-color button');
  const main = document.getElementsByTagName('main');

  const backgroundColors = (event) => {
    main[0].style.backgroundColor = event.target.innerText;
    localStorage.setItem('backgroundColor', JSON.stringify(event.target.innerText));
  }
  for (let index = 0; index < backgroundColorButton.length; index += 1) {
  backgroundColorButton[index].addEventListener('click', backgroundColors);
  }

  const fontColors = (event) => {
    main[0].style.color = event.target.innerText;
    localStorage.setItem('color', JSON.stringify(event.target.innerText));
  }
  for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', fontColors);
  }
}
