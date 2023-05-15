"use strict"

const buttons = document.querySelectorAll("[data-but]");
const buttonsContainer = document.querySelector(".tabs__buttons");
const tabs = document.querySelectorAll("[data-tab]");

function changeTab(e) {
    console.log("click");
    const target = e.target;
    console.log(target);

    if (target.dataset.but) {
        const dataNum = target.dataset.but;

        buttons.forEach((elem) => elem.classList.remove("tabs__button-active"));
        target.classList.add("tabs__button-active");

        tabs.forEach((elem) => elem.classList.remove("tab-active"));
        tabs.forEach((elem) => {
            if (elem.dataset.tab === dataNum) {
                elem.classList.add("tab-active")
            };
        });
    }
}

// buttons.forEach((elem) => elem.addEventListener("click", (e) => changeTab(e)));

buttonsContainer.addEventListener("click", (e) => changeTab(e));