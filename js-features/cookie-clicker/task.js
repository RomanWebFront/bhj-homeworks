let clickerCounter = document.getElementById("clicker__counter");
let clickSpeed = document.getElementById("clicker__speed");
let img = document.getElementById("cookie");

let lastClickTime = null;

let counter = 0;
let bigSize = false;
img.onclick = function () {
    if (lastClickTime == null) {
        lastClickTime = new Date();
    } else {
        let now = new Date();
        let speed = now - lastClickTime;
        lastClickTime = now;
        clickSpeed.textContent = speed / 1000.0;
    }
    counter++;
    bigSize = !bigSize;
    clickerCounter.textContent = counter;
    if (bigSize) {
        img.width = 220;
    } else {
        img.width = 200;
    }
}
