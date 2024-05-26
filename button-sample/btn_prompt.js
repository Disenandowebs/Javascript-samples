const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Ingrese un nuevo nombre");
  button.textContent = `Player 1: ${name}`;
}