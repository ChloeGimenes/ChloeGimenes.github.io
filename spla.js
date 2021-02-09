
/* NAVBAR */////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* RECHERCHE APPEAR-DISAPPEAR *////////////////
   

    function ShowSearchBar() {
        var x = document.getElementById("search-appear");
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      }

    function ClearFields() {

        document.getElementById("b2").value = "";
   }

   $('.main-gallery').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });