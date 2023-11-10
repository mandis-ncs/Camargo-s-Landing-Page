document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.getElementById("share-button");

    shareButton.addEventListener("click", async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Camargo's Pousada e Festas",
                    text: "Olha só o que eu encontrei:",
                    url: "https://www.ish.app.br/camargos/", //LINK DO DOMINIO AQUI
                });
            } catch (error) {
                console.error("Erro ao compartilhar:", error);
            }
        } else {
            window.location.href = "https://www.ish.app.br/camargos/"; //LINK DO DOMINIO AQUI
        }
    });
});
