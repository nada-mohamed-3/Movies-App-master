let header = document.querySelector("header");

window.addEventListener('scroll', () => {
   header.classList.toggle("shadow", window.scrollY > 0);
  
});


let navbar = document.querySelector("#navbarSupportedContent");


window.addEventListener("scroll", () => {
  navbar.classList.remove("show");
});