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


// MODAL SHARE BUTTON
const modal = document.getElementById("share-modal");
const shareButton = document.getElementById("share-button");
const closeButton = document.getElementById("close-modal");

modal.style.display = "none"; // Oculta o modal inicialmente

shareButton.addEventListener("click", () => {
  modal.style.display = "flex"; // Exibe o modal quando o botão é clicado
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none"; // Fecha o modal
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// MODAL QRCode
const qrcodeButton = document.getElementById("qrcode-button");
const qrcodeModal = document.getElementById("qrcode-modal");
const closeQrcodeModal = document.getElementById("close-qrcode-modal");

qrcodeModal.style.display = "none"; // Oculta o modal inicialmente

qrcodeButton.addEventListener("click", () => {
  qrcodeModal.style.display = "flex";
});

closeQrcodeModal.addEventListener("click", () => {
  qrcodeModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === qrcodeModal) {
    qrcodeModal.style.display = "none";
  }
});

