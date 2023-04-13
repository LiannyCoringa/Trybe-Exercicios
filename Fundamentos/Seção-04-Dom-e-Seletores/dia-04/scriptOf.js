  const backgroundColorButton = document.querySelectorAll('#background-color button');
  const backgroundColor = document.getElementById('background-color');
  const colors = document.querySelectorAll('#font-color button');
  const fontSize = document.querySelectorAll('#font-size button');
  const lineHeight = document.querySelectorAll('#line-height button');
  const fontFamily = document.querySelectorAll('#font-family button');
  const main = document.getElementsByTagName('main');

  if (localStorage.getItem('backgroundColor') !== null) {
    main[0].style.backgroundColor = JSON.parse(localStorage.getItem('backgroundColor'));
  }
  if (localStorage.getItem('color') !== null) {
    main[0].style.color = JSON.parse(localStorage.getItem('color'));
  }
  if (localStorage.getItem('fontSize') !== null) {
    main[0].style.fontSize = JSON.parse(localStorage.getItem('fontSize'));
  }
  if (localStorage.getItem('lineHeight') !== null) {
    main[0].style.lineHeight = JSON.parse(localStorage.getItem('lineHeight'));
  }
  if (localStorage.getItem('fontFamily') !== null) {
    main[0].style.fontFamily = JSON.parse(localStorage.getItem('fontFamily'));
  }


  const backgroundColors = (event) => {
    localStorage.setItem('backgroundColor', JSON.stringify(event.target.innerText));
    location.reload();
  }
  for (let index = 0; index < backgroundColorButton.length; index += 1) {
  backgroundColorButton[index].addEventListener('click', backgroundColors);
  }

  const fontColors = (event) => {
    localStorage.setItem('color', JSON.stringify(event.target.innerText));
    location.reload();
  }
  for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', fontColors);
  }

  const fontSizes = (event) => {
    localStorage.setItem('fontSize', JSON.stringify(event.target.innerText));
    location.reload();
  }
  for (let index = 0; index < fontSize.length; index += 1) {
  fontSize[index].addEventListener('click', fontSizes);
  }

  const lineHeights = (event) => {
    localStorage.setItem('lineHeight', JSON.stringify(event.target.innerText));
    location.reload();
  }
  for (let index = 0; index < lineHeight.length; index += 1) {
  lineHeight[index].addEventListener('click', lineHeights);
  }

  const fontFamilys = (event) => {
    localStorage.setItem('fontFamily', JSON.stringify(event.target.innerText));
    location.reload();
  }
  for (let index = 0; index < fontFamily.length; index += 1) {
  fontFamily[index].addEventListener('click', fontFamilys);
  }