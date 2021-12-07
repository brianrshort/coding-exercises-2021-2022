//HTML element variables
const passPlace = document.getElementById("PWplacement");
const caps = document.getElementById("PWType1");
const lowers = document.getElementById("PWType2");
const chars = document.getElementById("PWType3");
const nums = document.getElementById("PWType4");
const pwlength = document.getElementById("PWLength");
const button = document.getElementById("genPW");

//Variables for letters, numbers, and character arrays
let capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let splitCaps = capAlpha.split("");
let lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
let splitLowers = lowerAlpha.split("");
let numArr = "0123456789";
let splitNums = numArr.split("");
let charsArr = "!@#$%^&*()";
let splitChars = charsArr.split("");

//The main function, added to the button event listener
button.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(pwlength.value);

    //If no boxes were checked, a warning/error message appears.
    //If the input shows more than 100 characters or fewer than 8 characters,
    //a warning/error message appears.
    if (!caps.checked && !lowers.checked && !nums.checked && !chars.checked) {
        passPlace.innerText = "No password character types selected."
    } else if (pwlength.value > 100) {
        passPlace.innerText = "Maximum length is 100 characters.";
    } else if (pwlength.value < 8) {
        passPlace.innerText = "Minimum length is 8 characters.";
    } else {
    //The main password variable
    let pw = [];

    //As long as the length of the pw array is less than what the user requsted as 
    //the password length, this code runs. 
    while (pw.length < pwlength.value) {
        //A randomizer to pick which of the character types to include
        let rand = Math.floor(Math.random() * 4);
        //The switch case which actually chooses a character based on the randomizer
        switch(rand) {
           case 0:
                if (caps.checked) {
                    let rand = Math.floor(Math.random() * 26);
                    pw.push(splitCaps[rand]); 
                } else {
                    continue;
                };
                break;
            case 1:
                if (lowers.checked) {
                        let rand = Math.floor(Math.random() * 26);
                        pw.push(splitLowers[rand]); 
                    } else {
                        continue;
                    };
                    break;
            case 2:
                if (nums.checked) {
                    let rand = Math.floor(Math.random() * 10);
                    pw.push(splitNums[rand]); 
                } else {
                    continue;
                };
                break;
            case 3:
                if (chars.checked) {
                        let rand = Math.floor(Math.random() * 10);
                        pw.push(splitChars[rand]); 
                    } else {
                        continue;
                    };
                    break;
        }
    }
    
    //Validation to check if a capital letter was inserted if the checkbox was marked;
    //if not, this picks a random capital letter and spices it in at a random index
    if (caps.checked) {
        let checkCaps = pw.some(el => {    
            return splitCaps.includes(el);
        });
        if (!checkCaps) {
            let randIndex = Math.floor(Math.random() * pw.length);
            let randCap = splitCaps[Math.floor(Math.random() * 26)];
            pw.splice(randIndex, 1, randCap);
        }
    }

    //Validation to check if a lowercase letter was inserted if the checkbox was marked;
    //if not, this picks a random lowercase letter and spices it in at a random index
    if (lowers.checked) {
        let checkLowers = pw.some(el => {    
            return splitLowers.includes(el);
        });
        if (!checkLowers) {
            let randIndex = Math.floor(Math.random() * pw.length);
            let randCap = splitLowers[Math.floor(Math.random() * 26)];
            pw.splice(randIndex, 1, randCap);
        }
    }

    //Validation to check if a special character was inserted if the checkbox was marked;
    //if not, this picks a random character and spices it in at a random index
    if (chars.checked) {
        let checkChars = pw.some(el => {    
            return splitChars.includes(el);
        });
        if (!checkChars) {
            let randIndex = Math.floor(Math.random() * pw.length);
            let randCap = splitChars[Math.floor(Math.random() * 26)];
            pw.splice(randIndex, 1, randCap);
        }
    }

    //Validation to check if a number was inserted if the checkbox was marked;
    //if not, this picks a random number and spices it in at a random index
    if (nums.checked) {
        let checkNums = pw.some(el => {    
            return splitNums.includes(el);
        });
        if (!checkNums) {
            let randIndex = Math.floor(Math.random() * pw.length);
            let randCap = splitNums[Math.floor(Math.random() * 26)];
            pw.splice(randIndex, 1, randCap);
        }
    }

    //Finally, make the password actually appear on the screen after it's been created
    passPlace.innerText = pw.join("");
}
})