const charArr = [];

const form = document.getElementById("characterForm");
form.addEventListener("submit", event => {
    event.preventDefault();
    const str = document.getElementById("str").value;
    const dex = document.getElementById("dex").value;
    const con = document.getElementById("con").value;
    const wis = document.getElementById("wis").value;
    const int = document.getElementById("int").value;
    const chr = document.getElementById("chr").value;
    const cla = document.getElementById("class").value.trim();
    const race = document.getElementById("race").value
    const alignment = document.getElementById("alignment").value
    const world = document.getElementById("world").value
    const charObj = {
        str,
        dex,
        con,
        int,
        wis,
        chr,
        class: cla,
        race,
        alignment,
        world
    }
    console.log(charObj);
    charArr.push(charObj);
    localStorage.setItem("char", JSON.stringify(charArr));
    const stored = JSON.parse(localStorage.getItem("char"));
    console.log(stored);
})