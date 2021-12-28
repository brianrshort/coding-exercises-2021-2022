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

      $(".postText").focus();
      $('.postText').on('keyup', (event) => {
        let post = $(event.currentTarget).val();
        let remaining = 140 - post.length;
        $(".characters").html(remaining);
        if (remaining <= 0) {
          $('.wordcount').addClass('red');
        } else if (remaining > 0) {
          $(".wordcount").removeClass('red');
        }
      })
  }); 
  