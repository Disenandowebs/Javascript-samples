const button = document.querySelector("button");
const nombre = document.getElementById("nombre");

button.addEventListener("click", updateName);

function updateName() {
    // const name = prompt("Ingrese un nuevo nombre");
    const valor = nombre.value;
    button.textContent = `Player 1: ${valor}`;
    nombre.value = "";
}