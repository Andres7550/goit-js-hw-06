function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear previous boxes

  let size = 30; // Initial size
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10; // Increase size for next box
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear all boxes
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input[type="number"]').value);
  createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
  destroyBoxes();
});