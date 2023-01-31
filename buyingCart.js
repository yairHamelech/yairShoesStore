const shoes = JSON.parse(localStorage.getItem("shoes"));
const currentShoes = shoes.filter((shoes) => shoes.isSelected);

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

document.querySelector(".btn").addEventListener("click", function (e) {
  const warning = document.createElement("p");
  warning.classList.add("warning");
  if (e.target.innerText == "buy now" && count == 0) {
    e.target.innerText = "continue shopping";
  }
});
