///////////////////////////////////////////
//Setting the date at the top of the page
//////////////////////////////////////////

const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const hour = date.getHours();

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
    //console.log("Cleared");
    localStorage.setItem("8", "");
    localStorage.setItem("9", "");
    localStorage.setItem("10", "");
    localStorage.setItem("11", "");
    localStorage.setItem("12", "");
    localStorage.setItem("1", "");
    localStorage.setItem("2", "");
    localStorage.setItem("3", "");
    localStorage.setItem("4", "");
    localStorage.setItem("5", "");
    localStorage.setItem("6", "");
    localStorage.setItem("7", "");
    location.reload();
})

//////////////////////////////
//Day Planner Input and Content
//////////////////////////////
const plannerContainer = document.getElementById("plannerContainer")

for (var i = 1; i < 13; i++) {
    let realHour = i + 7;
    let displayHour = realHour;
    if (displayHour > 12) {
        displayHour -= 12;
    }
    let div = document.createElement("div");
    div.innerText = `${displayHour} o'clock`;
    if (realHour < hour) {
        div.innerText += "|| Past";
    } else if (realHour === hour) {
        div.innerText += "|| Present";
    } else if (realHour > hour) {
        div.innerText += "|| Future";
    }

    let input = document.createElement("input");
    input.type = "text";
    input.id = `${displayHour}-value`;
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.id = `${displayHour}-submit`;
    submit.innerText = "Submit";
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        //console.log("Submitted");
        //console.log(displayHour);
        logEntries(displayHour.toString());
    });
    plannerContainer.append(div);
    plannerContainer.append(input);
    plannerContainer.append(submit);
    let plans = document.createElement("div");
    if (!localStorage.getItem(displayHour.toString())) {
        plans.innerText = "No plans";
    } else {
        plans.innerText = localStorage.getItem(displayHour.toString());
    }
    plannerContainer.append(plans);
}

function logEntries(numString) {
    console.log(`${numString}-value`)
    let val = document.getElementById(`${numString}-value`);
    localStorage.setItem(numString, val.value);
    location.reload();
}