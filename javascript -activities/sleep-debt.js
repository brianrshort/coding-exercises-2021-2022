function getSleepHours(day) {
    switch (day) {
      case "Monday":
        return 8;
        break;
      case "Tuesday":
        return 6;
        break;
      case "Wednesday":
        return 4;
        break;
      case "Thursday":
        return 5;
        break;
      case "Friday":
        return 7;
        break;
      case "Saturday":
        return 9;
        break;
      case "Sunday":
        return 8;
        break; 
    }
  }
  
  function getActualSleepHours() {
    return getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");
  }
  
  function getIdealSleepHours() {
    let idealHours = 8; 
    return idealHours * 7; 
  }
  
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("Great sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("Too much sleep!");
    } else if (actualSleepHours < idealSleepHours) {
      console.log("Get more sleep!");
    }
      
  }
  
  calculateSleepDebt();