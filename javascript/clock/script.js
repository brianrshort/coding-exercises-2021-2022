const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");
const dayEl = document.getElementById("day");

//let today = new Date();
//console.log(today); 
const months = ["January","February","March","April","May","June",
                    "July","August","September","October","November","December"]

setInterval(() => {
    let today = new Date();
    hourEl.innerText = today.getHours();
    minuteEl.innerText = today.getMinutes();
    secondsEl.innerText = today.getSeconds();
    millisecondsEl.innerText = today.getMilliseconds();
}, 10);