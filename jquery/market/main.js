$("document").ready(function() {
    $("#cart").on("click", () => {
        $("#cartMenu").show()
      })
      $("#account").on("click", () => {
        $("#accountMenu").show()
      })
      $("#help").on("click", () => {
        $("#helpMenu").show()
      })
      $("#cart").on("mouseleave", () => {
        $("#cartMenu").hide()
      })
      $("#account").on("mouseleave", () => {
        $("#accountMenu").hide()
      })
      $("#help").on("mouseleave", () => {
        $("#helpMenu").hide()
      })
  })