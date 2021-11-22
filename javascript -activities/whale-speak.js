let input = "Phrasey phrasey phrase umbrella";
let vowels = ["a","e","i","o","u"]
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i)
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j)
    if (input[i] === vowels[j]) {
      if (input[i] === "u" || input[i] === "o") {
        resultArray.push(input[i]);
      }
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray)
let results = resultArray.join('').toUpperCase();
console.log(results)