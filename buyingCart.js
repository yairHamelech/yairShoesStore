function render(shopingList) {
  console.log(shopingList);
  const shopingCart = document.getElementById("shopping-cart");
  console.log(shopingCart);
  shopingCart.innerHTML = "";

  for (let index = 0; index < shopingList.length; index++) {
    const name = document.createElement("p");
    name.innerText = shopingList[index].name;
    shopingCart.appendChild(name);
  }
}

const shoes = JSON.parse(localStorage.getItem("shoes"));
render(shoes);
