const form = document.getElementById("characterForm");
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Submitted");
})