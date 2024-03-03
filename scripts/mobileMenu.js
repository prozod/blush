let hamburger = document.getElementById("hamburger");
let hamburgerMenu = document.querySelector(".menu__mobile");

hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("menu__mobile--show");
  document.body.classList.toggle("disable-scroll-mobile-menu");
});
