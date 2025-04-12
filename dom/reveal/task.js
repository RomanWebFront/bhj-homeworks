const divs = document.querySelectorAll(".reveal");

window.addEventListener('scroll', function () {
    divs.forEach(div => {
        if (isVisible(div)) {
            div.classList.add("reveal_active");
        }
    });
});

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect()
    return !(bottom < 0 || top > window.innerHeight)
}
