let linkItems = document.querySelectorAll(".book__control a");
let content = document.querySelector(".book__content");
let sizeClasses = [];
linkItems.forEach(i => {
    let size = i.getAttribute("data-size");
        if (size != null) {
            sizeClasses.push("book_fs-" + size);
        } 
})

linkItems.forEach(link => {
    link.onclick = function () {
        linkItems.forEach(i => i.classList.remove("font-size_active"));
        link.classList.add("font-size_active");
        sizeClasses.forEach(i => content.classList.remove(i));
        let size = link.getAttribute("data-size");
        if (size != null) {
            content.classList.add("book_fs-" + size);
        }
        return false;
    }
})