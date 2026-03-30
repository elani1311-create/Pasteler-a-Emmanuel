let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    if (currentScroll > lastScroll && currentScroll > 120) {
        navbar.classList.add("hidden");
    } else if (currentScroll < lastScroll - 5) {
        navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});


document.querySelectorAll('.dropdown-toggle').forEach(function (el) {
    el.addEventListener('click', function (e) {
        if (this.classList.contains('show')) {
            window.location = this.getAttribute('href');
        }
    });
});