```javascript
/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


/* Close menu after clicking a link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section[id]");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =====================================================
   REQUEST BUTTON
===================================================== */

const requestButtons = document.querySelectorAll(".request-button");

requestButtons.forEach(button => {

    button.addEventListener("click", () => {

        /*
            این قسمت بعداً می‌تواند به فرم ثبت درخواست
            یا صفحه مخصوص ثبت سفارش متصل شود.

            مثال:

            window.location.href = "request.html";
        */

        alert("فرم ثبت درخواست به‌زودی فعال می‌شود.");

    });

});


/* =====================================================
   SIMPLE REVEAL ANIMATION
===================================================== */

const animatedElements = document.querySelectorAll(
    ".service-card, .large-card, .testimonial-card"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});
```
