const para = document.querySelector('p');
const heading = document.querySelector('#colorText');
const button = document.querySelector('#generateBtn');
const colorBox = document.querySelector('.color-box');

function generateColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

button.addEventListener('click', () => {
  const color = generateColor();
  heading.style.backgroundColor = color;
  colorBox.style.backgroundColor = color;
  heading.innerText = `Color: ${color}`;
});

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = "#3498db";
});
