document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const gallery = document.querySelector(".gallery");

  const iso = new Isotope(gallery, {
    itemSelector: '.filter',
    layoutMode: 'fitRows'
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = button.getAttribute("data-filter");

      iso.arrange({
        filter: filterValue
      });

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
