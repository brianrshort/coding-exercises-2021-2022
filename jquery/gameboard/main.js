var main = function() {
    $(".more-btn").on("click", (event) => {
        $(event.currentTarget).siblings().toggle();
      })
      
      $(".share").on("click", () => {
        $(".share-menu").toggle();
      })

    };
    
    $(document).ready(main);