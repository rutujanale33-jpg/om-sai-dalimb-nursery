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