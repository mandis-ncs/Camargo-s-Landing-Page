    const galleryModal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImgGallery");
    const captionText = document.getElementById("caption");
    const closeGallery = document.getElementById("closeGallery");

    galleryModal.style.display = "none";

    modalImg.src = imageSrc;
    captionText.innerHTML = caption;

    modalImg.addEventListener("click", () => {
        galleryModal.style.display = "flex"; // Exibe o modal quando o botão é clicado
      });
      
      closeGallery.addEventListener("click", () => {
        galleryModal.style.display = "none"; // Fecha o modal
      });
      
      window.addEventListener("click", (event) => {
        if (event.target === galleryModal) {
            galleryModal.style.display = "none";
        }
      });


  
   /**
   * Init isotope layout and filters
   */
  function initIsotopeLayout() {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });
  }
  window.addEventListener('load', initIsotopeLayout);

