
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
document.addEventListener("contextmenu", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});
