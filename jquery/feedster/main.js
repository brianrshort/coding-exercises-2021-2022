$(document).ready(() => {
    $(".menu").on("mouseover", () => {
        $(".nav-menu").show();
      })
      
      $(".nav-menu").on('mouseleave', () => {
        $(".nav-menu").hide();
      })

      $(".btn").on("mouseover", (event) => {
        $(event.currentTarget).addClass("btn-hover");
      }).on("mouseleave", (event) => {
        $(event.currentTarget).removeClass('btn-hover');
      })

  }); 
  