let arr;
let devouredArr;
let uneatenArr;

fetch('/').then(res => res.json()).then(data => {
    //console.log(data);
    arr = data;
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].devoured = false) {
            uneatenArr.push(arr[i]);
        } else {
            devouredArr.push(arr[i]);
        }
    };
    console.log(uneatenArr);
    console.log(devouredArr);
});

