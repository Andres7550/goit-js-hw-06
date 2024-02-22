const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
function updateNameOutput() {
    if (nameInput.value.trim() === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = nameInput.value;
    }
}
nameInput.addEventListener('input', updateNameOutput);
updateNameOutput();