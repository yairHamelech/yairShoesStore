const AboutUs = document.getElementById("AboutUs");
AboutUs.style.display = "none";
const openy = document.getElementById("open");

function show() {
  openy.style.animation = "slide 0.5s linear";
  openy.style.left = "100%";

  AboutUs.style.display = "block";
  AboutUs.style.animation = "opacity 2s linear";
  AboutUs.style.opacity = "1";
}
