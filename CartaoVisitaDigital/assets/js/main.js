
function copiarTexto(texto) {
  var input = document.createElement('input');
  input.value = texto;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  alert('Chave PIX copiada');
}


var linkAbrirModal = document.getElementById("abrirModal");
            var modal = document.getElementById("myModal");
            var fecharModal = document.getElementById("fecharModal");
        
            linkAbrirModal.addEventListener("click", function(event) {
                event.preventDefault();
                modal.style.display = "block";
            });
        
            fecharModal.addEventListener("click", function() {
                modal.style.display = "none";
            });
        
            modal.addEventListener("click", function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });

            var linkAbrirModalNovo = document.getElementById("abrirModalNovo");
    var meuModalNovo = document.getElementById("meuModalNovo");
    var fecharModalNovo = document.getElementById("fecharModalNovo");

    linkAbrirModalNovo.addEventListener("click", function(event) {
        event.preventDefault();
        meuModalNovo.style.display = "block";
    });

    fecharModalNovo.addEventListener("click", function() {
        meuModalNovo.style.display = "none";
    });