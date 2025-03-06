let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let getHole = function (index) {
    return document.getElementById("hole" + index);
}

for (i = 1; i <= 9; i++) {
    let index = i;
    getHole(index).onclick = () => {
        if (getHole(index).classList.contains("hole_has-mole")) {
            let newCount = parseInt(dead.textContent) + 1;
            if (newCount === 10) {
                alert("You winer");
                dead.textContent = 0;
                lost.textContent = 0;
            } else {
                dead.textContent = newCount;
            }
        } else {
            let newCount = parseInt(lost.textContent) + 1;
            if (newCount === 5) {
                alert("You loser");
                dead.textContent = 0;
                lost.textContent = 0;
            } else {
                lost.textContent = newCount;
            }
        }
    }
}