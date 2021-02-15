
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

  
  // Ajouter la class active pour les menus
      $(document).ready(function () {
      var url = window.location;
      // Will only work if string in href matches with location
      $('ul.nav a[href="#"]').parent().addClass('active');

      // Will also work for relative and absolute hrefs
      $('ul.nav a').filter(function () {
              return this.href == '#';
      }).parent().addClass('active').parent().parent().addClass('active');
      });


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