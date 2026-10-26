/* =========================================================
OM SAI DALIMB NURSERY
Website Interactions
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

/* ---------- MOBILE NAVIGATION ---------- */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close the menu after clicking a navigation link.
    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

            menuToggle.textContent = "☰";

        });

    });

    // Close the menu when switching to desktop width.
    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

            menuToggle.textContent = "☰";

        }

    });

}


/* ---------- AUTOMATIC FOOTER YEAR ---------- */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ---------- SCROLL REVEAL ANIMATIONS ---------- */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });

}


});
