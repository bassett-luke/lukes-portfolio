// NAVIGATION HAMBURGER ANIMATION
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-list");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

document.querySelectorAll(".menu").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    menu.classList.remove("is-active");
  })
);

// NAVIGATION LINKS ACTIVE STATE
const home = document.getElementById("home");
const about = document.getElementById("about");
const work = document.getElementById("work");
const contact = document.getElementById("contact");

document.getElementById("home").addEventListener("click", () => {
  home.classList.add("is-active");
  about.classList.remove("is-active");
  work.classList.remove("is-active");
  blog.classList.remove("is-active");
  contact.classList.remove("is-active");
});
document.getElementById("about").addEventListener("click", () => {
  home.classList.remove("is-active");
  about.classList.add("is-active");
  work.classList.remove("is-active");
  blog.classList.remove("is-active");
  contact.classList.remove("is-active");
});
document.getElementById("work").addEventListener("click", () => {
  home.classList.remove("is-active");
  about.classList.remove("is-active");
  work.classList.add("is-active");
  blog.classList.remove("is-active");
  contact.classList.remove("is-active");
});
document.getElementById("blog").addEventListener("click", () => {
  home.classList.remove("is-active");
  about.classList.remove("is-active");
  work.classList.remove("is-active");
  blog.classList.add("is-active");
  contact.classList.remove("is-active");
});
document.getElementById("contact").addEventListener("click", () => {
  home.classList.remove("is-active");
  about.classList.remove("is-active");
  work.classList.remove("is-active");
  blog.classList.remove("is-active");
  contact.classList.add("is-active");
});
