const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const menuIcon = menuButton.querySelector("i");
const navLinks = navMenu.querySelectorAll("a");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    const menuIsOpen = navMenu.classList.contains("open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    if (menuIsOpen) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

window.addEventListener("resize", function () {

    if (window.innerWidth > 800) {

        navMenu.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});