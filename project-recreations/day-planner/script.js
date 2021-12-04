const date = new Date();
const day = date.getDay();
const month = date.getMonth();

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

console.log(months[month]);

const today = document.getElementById("todays-date")
today.innerText= `${days[day]}, ${months[month]} ${date.getDate()} ${date.getFullYear()}`;