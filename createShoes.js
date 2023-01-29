function createShoes(shoes) {
  const shoesEllements = document.getElementById("shoesCollection");
  shoesEllements.classList.add("scrollbar");

  for (let i = 0; i < shoes.length; i++) {
    const shoesEllementDiv = document.createElement("div");
    shoesEllementDiv.classList.add(shoes[i].label);
    shoesEllementDiv.classList.add(...shoes[i].catagories);

    shoesEllementDiv.classList.add("shoes");

    const shoesEllementImg = document.createElement("img");
    shoesEllementImg.src = shoes[i].image;
    shoesEllementImg.classList.add("shoesImage");

    shoesEllementImg.classList.add("column");

    const addButtonEllement = document.createElement("button");
    addButtonEllement.classList.add("addToCart");
    addButtonEllement.innerText = "+";
    addButtonEllement.style.fontSize = "50px";
    addButtonEllement.style.display = "none";
    addButtonEllement.onclick = (e) => {
      if (shoes[i].isSelected) {
        addButtonEllement.style.opacity = 0.6;
      } else {
        addButtonEllement.style.opacity = 1;
      }

      shoes[i].isSelected = !shoes[i].isSelected;
      saveToLocalStorage(shoes);
    };
    shoesEllementDiv.classList.add("shoesImage");
    const buttonDivEllement = document.createElement("div");
    buttonDivEllement.appendChild(addButtonEllement);
    buttonDivEllement.classList.add("buttonDiv");

    shoesEllementDiv.onmouseenter = (e) => {
      addButtonEllement.style.display = "";
    };

    shoesEllementDiv.onmouseleave = (e) => {
      if (shoes[i].isSelected) {
        addButtonEllement.style.display = "block";
        // shoesEllementImg.style.filter = "  drop-shadow(0 0 1rem green)";
      } else {
        addButtonEllement.style.display = "none";

        // shoesEllementImg.style.filter = "";
      }
    };

    if (shoes[i].isSelected) {
      addButtonEllement.style.opacity = 1;
      addButtonEllement.style.display = "block";
      //   shoesEllementImg.style.filter = "  drop-shadow(0 0 1rem green)";
    }

    const imgDivEllement = document.createElement("div");
    imgDivEllement.classList.add("imgDiv");
    imgDivEllement.appendChild(shoesEllementImg);
    imgDivEllement.appendChild(buttonDivEllement);
    shoesEllementDiv.appendChild(imgDivEllement);

    const shoesEllementDetails = document.createElement("p");
    const shoesEllementNamePrice = document.createElement("p");
    const shoesEllementPrice = document.createElement("p");

    shoesEllementPrice.innerText = shoes[i].price + "$";
    const shoesEllementName = document.createElement("p");
    shoesEllementName.innerText = shoes[i].name;

    const shoesEllementCatagories = document.createElement("p");
    shoesEllementCatagories.innerText = shoes[i].catagories;
    shoesEllementNamePrice.classList.add("details");
    shoesEllementCatagories.classList.add("shoesCatagories");
    shoesEllementDetails.classList.add("alldetails");

    shoesEllementName.classList.add("shoesName");

    shoesEllementDiv.appendChild(shoesEllementDetails);
    shoesEllements.appendChild(shoesEllementDiv);
    shoesEllementDetails.appendChild(shoesEllementNamePrice);
    shoesEllementDetails.appendChild(shoesEllementName);

    shoesEllementNamePrice.appendChild(shoesEllementName);
    shoesEllementNamePrice.appendChild(shoesEllementPrice);
    shoesEllementDetails.appendChild(shoesEllementCatagories);
  }
}