const shoes = JSON.parse(localStorage.getItem("shoes"));
const currentShoes = shoes.filter((shoes) => shoes.isSelected);

createShoes(currentShoes);
