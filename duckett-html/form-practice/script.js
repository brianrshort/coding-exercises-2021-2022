const form = document.getElementById("characterForm");
form.addEventListener("submit", event => {
    event.preventDefault();
    const str = document.getElementById("str").value;
    const dex = document.getElementById("dex").value;
    const con = document.getElementById("con").value;
    const wis = document.getElementById("wis").value;
    const int = document.getElementById("int").value;
    const chr = document.getElementById("chr").value;
    const charObj = {
        str,
        dex,
        con,
        int,
        wis,
        chr
    }
    console.log(charObj);
})