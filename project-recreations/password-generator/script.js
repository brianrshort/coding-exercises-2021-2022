const passPlace = document.getElementById("PWplacement");
const caps = document.getElementById("PWType1");
const lowers = document.getElementById("PWType2");
const chars = document.getElementById("PWType3");
const nums = document.getElementById("PWType4");
const pwlength = document.getElementById("PWLength");
const button = document.getElementById("genPW");


button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(caps.checked);
})