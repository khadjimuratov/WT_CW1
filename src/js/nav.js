const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const navBtn = document.getElementById("navBtn");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("change");
  links.classList.toggle("show_nav");
});
