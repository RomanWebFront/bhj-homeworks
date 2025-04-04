let list = document.querySelectorAll("div.dropdown");
function initDropDown(element) {
    let value = element.querySelector("div.dropdown__value");
    let listItem = element.querySelector("ul.dropdown__list");
    value.onclick = function () {
        listItem.classList.toggle("dropdown__list_active");
    }
    listItem.querySelectorAll("li.dropdown__item a").forEach(link => {
        link.onclick = function () {
            value.textContent = link.textContent;
            listItem.classList.remove("dropdown__list_active");
            return false;
        }
    })
}
list.forEach(element => initDropDown(element));

