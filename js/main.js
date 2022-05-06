const header = document.querySelector("header");
const navLink = document.querySelectorAll(".nav-link");
const navUl = document.querySelector("header ul");
const navBars = document.querySelector("header .fa-bars");

/*---------- Stiky Navbar ----------*/

function stikeNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stikeNavbar()

window.addEventListener("scroll", stikeNavbar)

/*---------- Navbar Link Active ----------*/

function removeActive() {
    navLink.forEach(link => {
            link.classList.remove("active");
    });
}

navLink.forEach(link => {
    link.addEventListener('click', () => {
        removeActive();
        link.classList.add("active");
    })
});

/*---------- Navbar List ----------*/

navBars.addEventListener("click", () => {
    navUl.classList.toggle("show")
    if (navUl.classList.contains("hidden")) {
        navUl.classList.remove("hidden")
        navUl.classList.toggle("show")
    }
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navUl.classList.add("hidden");
    })
});