const passPlace = document.getElementById("PWplacement");
const caps = document.getElementById("PWType1");
const lowers = document.getElementById("PWType2");
const chars = document.getElementById("PWType3");
const nums = document.getElementById("PWType4");
const pwlength = document.getElementById("PWLength");
const button = document.getElementById("genPW");

let capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let splitCaps = capAlpha.split("");
let lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
let splitLowers = lowerAlpha.split("");
let numArr = "0123456789";
let splitNums = numArr.split("");
let charsArr = "!@#$%^&*()";
let splitChars = charsArr.split("");

button.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(pwlength.value);
    if (!caps.checked && !lowers.checked && !nums.checked && !chars.checked) {
        passPlace.innerText = "No password character types selected."
    } else {
    let pw = [];
    while (pw.length < pwlength.value) {
        let rand = Math.floor(Math.random() * 4);
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
    console.log(`Capital letters checked:  #${caps.checked}`)
    if (caps.checked) {
        //console.log(pw);
        //console.log(splitCaps);
        let checkCaps = pw.some(el => {
            
            return splitCaps.includes(el);
        });
        console.log(`Password includes capitals: ${checkCaps}`);
        if (!checkCaps) {

        }
    }

    //console.log(pw);
    passPlace.innerText = pw.join("");
}
})