"use strict"

const buttons = document.querySelectorAll("[data-but]");
const buttonsContainer = document.querySelector(".tabs__buttons");
const tabs = document.querySelectorAll("[data-tab]");

function changeTab(e) {
    const target = e.target;

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
const bag = document.querySelector(".header-footer__bag span");
const bagClass = document.querySelector(".header-footer__bag");
const bagBuy = document.querySelectorAll("[data-bag]");


burger.addEventListener("click", () => {
    menu.classList.toggle("header__menu-active");
});

const menuButtons = menu.querySelectorAll("li,a");

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
    if (!bagClass.classList.contains("header-footer__bag-on")) {
        bagClass.classList.add("header-footer__bag-on");
    }
    const previous = +bag.textContent;
    bag.textContent = previous + 1;
    if (bag.textContent.length >= 3 && (((15 + 7 * (bag.textContent.length - 2)) + "px") != bag.style.width)) {
        bag.style.width = (15 + 7 * (bag.textContent.length - 2)) + "px";
        bag.style.bottom = bag.style.right = "-3px";
        localStorage.setItem("bagStyles", JSON.stringify({ width: bag.style.width }));
    }
    localStorage.setItem("bagCount", bag.textContent);
}
))

function defaultSettings() {
    if (localStorage.getItem("bagCount")) {
        bagClass.classList.add("header-footer__bag-on");
        bag.textContent = localStorage.getItem("bagCount");
        if (localStorage.getItem("bagStyles")) {
            const bagStyles = JSON.parse(localStorage.getItem("bagStyles"));
            bag.style.bottom = bag.style.right = "-3px";
            bag.style.width = bagStyles.width;
        }
    }
}

defaultSettings()

