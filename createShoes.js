function createFavorite(currentshoes, shoes) {
  const FavoriteElement = document.createElement("button");
  FavoriteElement.classList.add("tuhb");
  FavoriteElement.style.content = "\f004";

  FavoriteElement.onclick = (e) => {
    if (currentshoes.favorite == true) {
      currentshoes.favorite = false;
      FavoriteElement.style.color = "#aaa";
    } else {
      currentshoes.favorite = true;
      FavoriteElement.style.color = "red";
      FavoriteElement.style.animation = "";
      FavoriteElement.offsetWidth;
      FavoriteElement.style.animation = "size 1s linear";
    }

    saveToLocalStorage(shoes);
  };

  return FavoriteElement;
}

function createDescription(
  currentshoes,
  addButtonEllement,
  shoesEllementDiv,
  shoes,
  description
) {
  const shoesEllementdescription = document.createElement("p");

  const alertDescription = document.getElementById("alertDescription");

  description.classList.add("description");
  description.innerText = "description";
  description.style.fontSize = "20px";

  shoesEllementDiv.onmouseenter = (e) => {
    if (description.style.top == "200px") {
      description.style.top = "290px";
    }
  };
  shoesEllementDiv.onmouseleave = (e) => {
    if (description.style.top == "290px") {
      description.style.top = "200px";
    }
  };

  shoesEllementDiv.onmouseenter = (e) => {
    if (description.innerText == "description") {
      addButtonEllement.style.display = "";
    }
    if (!currentshoes.isSelected) {
      description.style.display = "";
    }
  };
  description.onclick = (e) => {
    alertDescription.innerText = currentshoes.contact;
    alertDescription.style.animation = "";
    void alertDescription.offsetWidth;

    alertDescription.style.animation = "alert 8s linear";
  };
  shoesEllementDiv.onmouseleave = (e) => {};
  return description;
}

function createAddToCart(
  currentShoes,
  shoes,
  addButtonEllement,
  sum,
  shoesEllementDiv,
  description
) {
  addButtonEllement.classList.add("addToCart");
  addButtonEllement.innerText = "Add";
  addButtonEllement.style.fontSize = "20px";

  shoesEllementDiv.onmouseenter = (e) => {
    if (addButtonEllement.style.top == "200px") {
      addButtonEllement.style.top = "290px";
    }
  };
  shoesEllementDiv.onmouseleave = (e) => {
    if (addButtonEllement.style.top == "290px") {
      addButtonEllement.style.top = "200px";
    }
  };
  addButtonEllement.onclick = (e) => {
    addButtonEllement.style.animation = "";
    void addButtonEllement.offsetWidth;

    addButtonEllement.style.animation = "shake 0.6s linear";
    if (currentShoes.isSelected) {
      addButtonEllement.innerText = "Add";
      sum--;
    } else {
      sum++;

      addButtonEllement.innerText = "Remove";
      document.getElementById("cartLogo").style.animation = "";
      void document.getElementById("cartLogo").offsetWidth;
      document.getElementById("cartLogo").style.animation =
        "rotation 1s linear";
    }
    currentShoes.isSelected = !currentShoes.isSelected;
    saveToLocalStorage(shoes);
    document.getElementById("demo").innerText = sum;
  };
  if (currentShoes.isSelected) {
    addButtonEllement.innerText = "Remove";
  }
  const element = document.getElementById("demo");
  if (element) {
    element.innerText = sum;
  }
  return addButtonEllement;
}

function createShoes(shoes) {
  const shoesEllements = document.getElementById("shoesCollection");
  shoesEllements.classList.add("scrollbar");
  let sum = shoes.filter((shoes) => shoes.isSelected).length;

  for (let i = 0; i < shoes.length; i++) {
    const shoesEllementDiv = document.createElement("div");
    shoesEllementDiv.classList.add(shoes[i].label);
    shoesEllementDiv.classList.add(...shoes[i].catagories);

    shoesEllementDiv.classList.add("shoes");

    const shoesEllementImg = document.createElement("img");
    shoesEllementImg.src = shoes[i].image;
    shoesEllementImg.classList.add("shoesImage");

    const addButtonEllement = document.createElement("button");
    const description = document.createElement("button");
    const FavoriteElement = createFavorite(shoes[i], shoes);
    const descriptionEllement = createDescription(
      shoes[i],
      addButtonEllement,
      shoesEllementDiv,
      shoes,
      description
    );
    const addToCartEllement = createAddToCart(
      shoes[i],
      shoes,
      addButtonEllement,
      sum,
      shoesEllementDiv,
      description
    );
    if (shoes[i].favorite) {
      FavoriteElement.style.color = "red";
    }
    shoesEllementDiv.classList.add("shoesImage");
    const buttonDivEllement = document.createElement("div");
    buttonDivEllement.appendChild(addToCartEllement);
    buttonDivEllement.appendChild(descriptionEllement);
    const imageDivEllement = document.createElement("div");
    imageDivEllement.classList.add("shoesImageDiv");
    imageDivEllement.appendChild(shoesEllementImg);
    buttonDivEllement.classList.add("buttonDiv");

    imageDivEllement.appendChild(FavoriteElement);
    shoesEllementDiv.appendChild(buttonDivEllement);
    shoesEllementDiv.appendChild(imageDivEllement);

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
