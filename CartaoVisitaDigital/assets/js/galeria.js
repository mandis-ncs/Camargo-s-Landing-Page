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
   $(document).ready(function() {
    // Initialize Isotope
    var $listing = $('.gallery').isotope({
      itemSelector: '.isotope-item',
      layoutMode: 'fitRows'
    });

    // Filter button click event
    $("#filters").on("click", "button", function() {
      var filterValue = $(this).attr('data-filter');
      $listing.isotope({ filter: filterValue });
    });
  });