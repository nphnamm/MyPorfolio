const header = document.querySelector("header");

/* ------------------------- Sticky Navbar -------------------------- */

function stickyNavbar(){
  header.classList.toggle("scrolled", window.pageYOffset >0);

}


window.addEventListener("scroll",stickyNavbar);

/* ------------------------- Reveal Animation -------------------------- */

let sr = ScrollReveal({
  duration :2000 ,
  distance: "60px",

});

sr.reveal(".showcase-info",{delay:600});
sr.reveal(".showcase-image",{delay:600});
