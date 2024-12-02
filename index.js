const baseInfo = {
    subcribes: 20,
    friends: 0,
    publicates: 8
}

for (let element of baseInfo) {


    let p1 = document.createElement("p");
    p1.textContent = element.subcribes;
    let div1 = document.querySelector(".subcribes")
    div1.appendChild(p1)
}