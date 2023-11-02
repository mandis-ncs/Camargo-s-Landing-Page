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


//fetch modal.html e carrega na div modalContainer

function loadModal() {
    fetch('../../modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalContainer').innerHTML = data; 
        })
        .catch(error => console.error('Erro ao carregar o modal:', error));
}


// button para abrir modal

                                            // id do button 
var linkAbrirModal = document.getElementById("share-button");
            var modal = document.getElementById("meuModalNovo");
            var fecharModal = document.getElementById("fecharModalNovo");
        
            // abre modal ao clicar
            linkAbrirModal.addEventListener("click", function(event) {
                event.preventDefault();
                loadModal(); // carrega o modal
                modal.style.display = "block"; // none -> block
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