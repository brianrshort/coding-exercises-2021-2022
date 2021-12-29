var main = function() {
    $(".more-btn").on("click", (event) => {
        $(event.currentTarget).siblings().toggle();
      })
    };
    
    $(document).ready(main);