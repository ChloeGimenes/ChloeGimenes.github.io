
/* NAVBAR */////////////////////////////////////////////////////////////////////////////////////////////////////////

    // function ShowSearchBar() {
    //     var x = document.getElementById("search-appear");
    //     if (x.style.display === "none") {
    //       x.style.display = "flex";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }

    /* AVOID DROPDOWN MENU CLOSE ON CLICK INSIDE */
      // $(document).on('click', '.megamenu', function (e) {
      //   e.stopPropagation(); 
      // });


    /* CLEAR INPUT FIELD ON CLICK BUTTON */
      function ClearFields() {
        document.getElementById("b2").value = " ";
      }

      // function deleteInput() {
      //   document.getElementById("b2").value = "";
      //   }
      //   document.getElementById("navbar-delete").addEventListener("click", deleteInput);



   /* CAROUSEL /////////////////////////////////////////////////////////////////////////////////////////////*/

      $('.main-gallery').flickity({
      // options
      cellAlign: 'left',
      contain: true
      });