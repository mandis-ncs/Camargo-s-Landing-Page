document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const gallery = document.querySelector(".gallery");

  // Inicialize o Isotope
  const iso = new Isotope(gallery, {
    itemSelector: '.filter',
    layoutMode: 'fitRows'
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = button.getAttribute("data-filter");

      // Atualize o Isotope com o filtro selecionado
      iso.arrange({
        filter: filterValue
      });

      // Remova a classe 'active' de todos os botões
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Adicione a classe 'active' ao botão atual
      button.classList.add("active");
    });
  });
});
