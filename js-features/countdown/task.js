let timer = document.getElementById("timer");
let time = parseInt(timer.innerText);
let handler = function() {
    time = time - 1;
    timer.innerText = time;
    if (time === 0) {
        window.alert("Вы победили в конкурсе!");
    } else {
        setTimeout(handler, 1000);
    }
} 
 setTimeout(handler, 1000);