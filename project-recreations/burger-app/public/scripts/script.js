let arr;
let devouredArr = [];
let uneatenArr = [];

let uneatenBurgerDiv = document.getElementById("uneaten");
let eatenBurgerDiv = document.getElementById("eaten");

async function fetchGet() {
    let url ="/get/";
    const res = await fetch(url);
    console.log(res);
    arr = await res.json();
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].devoured === 0) {
            uneatenArr.push(arr[i]);
        } else if (arr[i].devoured === 1) {
            devouredArr.push(arr[i]);
        }
    };
    console.log(uneatenArr);
    console.log(devouredArr);
    for (var i = 0; i < uneatenArr.length; i++) {
        let burger = displayBurger(uneatenArr[i]);
        uneatenBurgerDiv.append(burger);
    }
    for (var i = 0; i < devouredArr.length; i++) {
        let burger = displayBurger(devouredArr[i]);
        eatenBurgerDiv.append(burger);
    }
}

fetchGet();




function displayBurger(burgerObj) {
    let div = document.createElement("div");
    let header = document.createElement("h1");
    header.innerText = burgerObj.burger;
    div.append(header);
    let devourButton = document.createElement("input");
    devourButton.type = "submit";
    devourButton.id = burgerObj.id;
    devourButton.name = burgerObj.devoured;
    devourButton.addEventListener('click', e => {
        e.preventDefault();
        devourBurger(e.target);
        location.reload();
    });
    div.append(devourButton);
    let deleteButton = document.createElement("input");
    deleteButton.type = "submit";
    deleteButton.id = burgerObj.id;
    deleteButton.addEventListener('click', e => {
        e.preventDefault();
        deleteBurger(e.target.id);
        location.reload();
    });
    div.append(deleteButton);
    return div; 
}

function devourBurger(target) {
    let obj = {};
    if (target.name === "false") {
        obj = { devoured: true };
    } else if (target.name === "true") {
        obj = { devoured: false };
    }
    fetch(`/${target.id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj)
    }).then(response => response.json)
    .then(data => console.log(data));
}

function deleteBurger(id) {
    fetch(`/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => console.log(data));
}
