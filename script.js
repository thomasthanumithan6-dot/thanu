// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// ================================
// CLOSE MENU AFTER CLICK
// ================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// ================================
// CONTACT FORM
// ================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const button = form.querySelector("button");

    button.textContent = "Message Sent ✓";

    button.style.background = "#222";
    button.style.color = "#fff";

    setTimeout(() => {

        button.textContent = "Send Message →";

        button.style.background = "#fff";
        button.style.color = "#000";

        form.reset();

    }, 3000);

});


// ================================
// NAVBAR SCROLL EFFECT
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,5,5,.92)";

    } else {

        header.style.background = "rgba(5,5,5,.7)";

    }

});


// ================================
// REVEAL ANIMATION
// ================================

const cards = document.querySelectorAll(
    ".service-card, .project-card, .why-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(card);

});