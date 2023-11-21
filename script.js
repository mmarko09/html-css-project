// ---- Sticky navigation ----

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    function (entries) {
        const entry = entries[0];

        if (!entry.isIntersecting) {
            document.body.classList.add("sticky");
        }

        if (entry.isIntersecting) document.body.classList.remove("sticky");
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);

observer.observe(sectionHero);

// ---- SMOOTH SCROOLING ----

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const hrefAtt = link.getAttribute("href");

        if (hrefAtt === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        if (hrefAtt !== "#" && hrefAtt.startsWith("#")) {
            const sectionEl = document.querySelector(hrefAtt);
            sectionEl.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

// Mobile navigation

const openNav = document.querySelector(".menu-btn");
const header = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-item");

openNav.addEventListener("click", () => {
    header.classList.toggle("nav-open");
    document.documentElement.classList.toggle("overflow");
});

navItem.forEach(function (item) {
    item.addEventListener("click", () => {
        header.classList.toggle("nav-open");
        document.documentElement.classList.remove("overflow");
    });
});
