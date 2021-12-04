///////////////////////////////////////////
//Setting the date at the top of the page
//////////////////////////////////////////

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

//console.log(months[month]);

const today = document.getElementById("todays-date")
today.innerText= `${days[day]}, ${months[month]} ${date.getDate()} ${date.getFullYear()}`;

//////////////////////////////////
//Clear button functionality
//////////////////////////////////


const clearButton = document.getElementById("clear-click");
clearButton.addEventListener("click", () => {
    console.log("Cleared");
    localStorage.setItem("1", "");
    localStorage.setItem("2", "");
    localStorage.setItem("3", "");
    localStorage.setItem("4", "");
    localStorage.setItem("5", "");
    localStorage.setItem("6", "");
    localStorage.setItem("7", "");
    localStorage.setItem("8", "");
    localStorage.setItem("9", "");
    localStorage.setItem("10", "");
    localStorage.setItem("11", "");
    localStorage.setItem("12", "");
})

