//This is the kelvin temperature forecast for today
const kelvin = 0;
//This is the formula to determine celsius from kelvin
const celsius = kelvin - 273;
//This is the formul to determine fahrenheit from celsius
let fahrenheit = celsius * (9/5) + 32;
//To avoid decimals 
fahrenheit = Math.floor(fahrenheit);

console.log(`the temperature is ${fahrenheit} degrees Fahrenheit.`);