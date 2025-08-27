window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".prema");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.createElement("div");
  menuBtn.classList.add("menu-btn");
  menuBtn.innerHTML = "&#9776;"; 

  const navbar = document.querySelector(".prema");
  const navLinks = document.querySelector(".nav-links");

  navbar.insertBefore(menuBtn, navLinks);

  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
document.addEventListener("contextmenu", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});
const sections = document.querySelectorAll(".section");

function revealSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
