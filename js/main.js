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

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__inner");
const scrollingItems = document.querySelectorAll("[data-scroll-target]");
const bag = document.querySelector(".header-footer__bag-on span");
const bagBuy = document.querySelectorAll("[data-bag]");


burger.addEventListener("click", () => {
    menu.classList.toggle("header__menu-active");
});

const menuButtons = menu.querySelectorAll("a");

function scrollingTo(e) {
    e.preventDefault();
    const scrollInfo = e.target.dataset.scroll;

    // console.log(scrollInfo)
    scrollingItems.forEach(elem => {
        if (elem.dataset.scrollTarget === scrollInfo) {
            console.log(elem.dataset.scrollTarget);
            // elem.scrollIntoView({
            //     block: "start",
            //     behavior: "smooth"
            // })
            console.log(window.pageYOffset + elem.getBoundingClientRect().top);
            window.scrollTo({
                top: window.pageYOffset + elem.getBoundingClientRect().top - 20,
                behavior: "smooth"
            })

            menu.classList.remove("header__menu-active");
        }
    })
}

menuButtons.forEach(el => {
    el.addEventListener("click", (e) => {
        scrollingTo(e)
    })
})


bagBuy.forEach(elem => elem.addEventListener("click", (e) => {
    const previous = +bag.textContent;
    bag.textContent = previous + 1;
}
)) 
