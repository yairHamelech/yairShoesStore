const shoes = JSON.parse(localStorage.getItem("shoes"));
const currentShoes = shoes.filter((shoes) => shoes.isSelected);
const shoesEllements = document.getElementById("shoesCollection");
shoesEllements.classList.add("scrollbar");
let clickCount = 0;
let closed = document.getElementById("close");

let total = document.getElementById("total");
createShoes(currentShoes);
let totalprice = 0;

for (let i = 0; i < currentShoes.length; i++) {
  totalprice += currentShoes[i].price;
}
total.innerText = totalprice.toFixed(2) + "$";

let warning = document.getElementById("warning");
warning.innerText =
  "you have nothing in your shopping cart, please add to cart a shoe first";
warning.style.display = "none";

document.querySelector(".btn").addEventListener("click", function (btn) {
  clickCount++;
  if (btn.target.innerText == "buy now" && currentShoes.length == 0) {
    btn.target.innerText = "continue shopping";

    warning.style.display = "inline-block";
  } else if (clickCount > 1 && currentShoes.length == 0) {
    window.location.assign("index.html");
  } else {
    document.getElementById("panel").style.display = "block";
  }
});
document.querySelector(".close").addEventListener("click", function (closed) {
  document.getElementById("panel").style.display = "none";
});
