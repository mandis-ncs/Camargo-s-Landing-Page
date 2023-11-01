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


// main.js

function loadModal() {
    fetch('../../modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalContainer').innerHTML = data;
            // Aqui você pode adicionar código para controlar o modal ou aplicar estilos adicionais, se necessário.
        })
        .catch(error => console.error('Erro ao carregar o modal:', error));
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

    linkAbrirModalNovo.addEventListener("click", function(event) {
        console.log('Clique no botão Share');
        event.preventDefault();
        loadModal();
        meuModalNovo.style.display = "block";
    });

    var fecharModalNovo = document.getElementById("fecharModalNovo");

    fecharModalNovo.addEventListener("click", function() {
        meuModalNovo.style.display = "none";
    });



    var shareButton = document.getElementById("share-button");
    var modalContainer = document.getElementById("modalContainer");
    
    shareButton.addEventListener("click", function(event) {
        event.preventDefault();
        var targetId = shareButton.getAttribute("data-target");
        var modal = document.getElementById(targetId);
        
        if (modal) {
            loadModal();
            modal.style.display = "block";
        }
    });