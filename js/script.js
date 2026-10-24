/* =========================================================
   OM SAI DALIMB NURSERY
   Website Interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- MOBILE NAVIGATION ---------- */

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        function closeMenu() {
            navigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";
        }

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            menuToggle.textContent = isOpen ? "×" : "☰";

        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", closeMenu);

        });

        document.addEventListener("click", function (event) {

            if (
                !navigation.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }

        });

        window.addEventListener("resize", function () {

            if (window.innerWidth > 820) {
                closeMenu();
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


    /* ---------- WHATSAPP ENQUIRY FORM ---------- */

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const formData = new FormData(enquiryForm);

            const name = String(
                formData.get("name") || ""
            ).trim();

            const phone = String(
                formData.get("phone") || ""
            ).trim();

            const variety = String(
                formData.get("variety") || "Not specified"
            );

            const quantity = String(
                formData.get("quantity") || "Not specified"
            );

            const message = String(
                formData.get("message") || ""
            ).trim();


            const whatsappMessage = [

                "Hello Om Sai Dalimb Nursery!",

                "",

                "I would like to enquire about pomegranate plants.",

                "",

                "Name: " + name,

                "Phone: " + phone,

                "Variety: " + variety,

                "Quantity: " + quantity,

                "Message: " + (
                    message || "Not provided"
                )

            ].join("\n");


            const whatsappURL =
                "https://wa.me/918007240943?text=" +
                encodeURIComponent(whatsappMessage);


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }

});

/* FIX: Mobile navigation layout */
@media (max-width: 768px) {

    .navbar-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }

    .brand {
        flex: 1;
        min-width: 0;
    }

    .brand img {
        max-width: 42px;
        height: auto;
    }

    .brand-text {
        min-width: 0;
    }

    .brand-name {
        font-size: 12px;
        line-height: 1.2;
    }

    .brand-tagline {
        font-size: 9px;
        line-height: 1.2;
    }

    /* Keep menu links hidden until hamburger is tapped */
    .navMenu {
        display: none;
    }

    .navMenu.show {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        width: 100%;
        padding: 16px;
        background: #ffffff;
        z-index: 1000;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    }

    .navMenu.show a {
        display: block;
        padding: 10px 8px;
    }

    /* Language selector stays beside hamburger */
    .language-selector {
        flex-shrink: 0;
        width: 88px;
        max-width: 88px;
        padding: 8px 5px;
        font-size: 13px;
    }

    .nav-toggle {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
    }

    /* Prevent the old enquiry button from appearing */
    .nav-cta {
        display: none !important;
    }
}
```
