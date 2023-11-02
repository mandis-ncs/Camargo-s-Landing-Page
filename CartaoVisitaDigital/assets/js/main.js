//main.js

function copiarTexto(texto) {
  var input = document.createElement('input');
  input.value = texto;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  alert('Chave PIX copiada');
}


// modal.js
const modal = document.getElementById("share-modal");
const shareButton = document.getElementById("share-button");
const closeButton = document.getElementById("close-modal");

modal.style.display = "none"; // Oculta o modal inicialmente

shareButton.addEventListener("click", () => {
  modal.style.display = "block"; // Exibe o modal quando o botão é clicado
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none"; // Fecha o modal
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

