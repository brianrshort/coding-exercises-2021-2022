let raceNumber = Math.floor(Math.random() * 1000);
let raceEarly = true;
let raceAge = 19;
if (raceEarly && raceAge > 18) {
  raceNumber += 1000;
}
if (raceAge < 18) {
  console.log("Race time is 12:30")
} else if (raceEarly) {
  console.log("Race time is 9:30");
} else {
  console.log("Race time is 11:00");
}