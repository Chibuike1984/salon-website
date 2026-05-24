
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });




const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".nav-overlay");

menuToggle.addEventListener("click", () =>
{
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () =>
{
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () =>
{
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});