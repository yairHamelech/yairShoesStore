const shoes = JSON.parse(localStorage.getItem("shoes"));
const currentShoes = shoes.filter((shoes) => shoes.isSelected);
let clickCount = 0;

createShoes(currentShoes);
// function buy(buy) {
//   buy.classList.add("payment");
//   if (count == 0) {
//     buy.style.display = "none";
//   } else {
//     buy.style.display = "block";
//   }
// }
let count = 0;
for (let i = 0; i < currentShoes.length; i++) {
  count++;
}
let warning = document.getElementById("warning");
warning.innerText =
  "you have nothing on your shopping cart, please add to cart a shoe first";
warning.style.display = "none";

document.querySelector(".btn").addEventListener("click", function (btn) {
  if (btn.target.innerText == "buy now" && count == 0) {
    btn.target.innerText = "continue shopping";

    warning.style.display = "inline-block";
  }
  clickCount++;
  if (clickCount > 1 && count == 0) {
    window.location.assign("index.html");
  }
});
