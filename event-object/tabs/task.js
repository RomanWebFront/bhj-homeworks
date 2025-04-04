let list = document.querySelectorAll("div.tabs");
function initTabs(tabs) {
    const allNavigation = Array.from(tabs.querySelectorAll("div.tab__navigation div.tab"));
    const allContent = Array.from(tabs.querySelectorAll("div.tab__contents div.tab__content"));
    const tabClick = function (e) {
        const clickTab = e.target;
        allNavigation.forEach(tab => tab.classList.remove("tab_active"));
        clickTab.classList.add("tab_active");
        const index = allNavigation.indexOf(clickTab);
        allContent.forEach(content => content.classList.remove("tab__content_active"));
        allContent[index].classList.add("tab__content_active");
    }
    allNavigation.forEach(tab => tab.onclick = tabClick);
}

list.forEach(tabs => initTabs(tabs));