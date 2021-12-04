const date = new Date();
const day = date.getDay();

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

console.log(days[day]);

const today = document.getElementById("todays-date")
today.innerText= days[day];