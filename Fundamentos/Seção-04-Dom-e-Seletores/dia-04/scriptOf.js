  const backgroundColorButton = document.querySelectorAll('#background-color button');
  const backgroundColor = document.getElementById('background-color');
  const colors = document.querySelectorAll('#font-color button');
  const main = document.getElementsByTagName('main');

  if (localStorage.getItem('backgroundColor') !== null) {
    main[0].style.backgroundColor = JSON.parse(localStorage.getItem('backgroundColor'));
  }
  if (localStorage.getItem('color') !== null) {
    main[0].style.color = JSON.parse(localStorage.getItem('color'));
  }

  const backgroundColors = (event) => {
    localStorage.setItem('backgroundColor', JSON.stringify(event.target.innerText));
    if (localStorage.getItem('backgroundColor') !== null) {
        main[0].style.backgroundColor = JSON.parse(localStorage.getItem('backgroundColor'));
      }
  }
  for (let index = 0; index < backgroundColorButton.length; index += 1) {
  backgroundColorButton[index].addEventListener('click', backgroundColors);
  }



  const fontColors = (event) => {
    localStorage.setItem('color', JSON.stringify(event.target.innerText));
    if (localStorage.getItem('color') !== null) {
        main[0].style.color = JSON.parse(localStorage.getItem('color'));
      }
  }
  for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', fontColors);
  }

