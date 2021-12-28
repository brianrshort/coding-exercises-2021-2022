$(document).ready(() => {
    $("#text").on("keyup", event => {
        $(".preview").html($(event.currentTarget).val());
      })
      
      $("#font").on("change", (event) => {
        $(".preview").css({
          fontFamily: $(event.currentTarget).val()
        });
      })
  })