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

    shoesEllementImg.classList.add("column");
    const shoesEllementContact = document.createElement("p");
    shoesEllementContact.innerText = shoes[i].contact;

    const FavoriteElement = document.createElement("button");

    FavoriteElement.classList.add("tuhb");
    FavoriteElement.style.content = "\f004";

    const contact = document.createElement("button");
    contact.classList.add("description");
    contact.innerText = "description";
    contact.style.fontSize = "20px";
    contact.style.display = "none";
    const addButtonEllement = document.createElement("button");
    addButtonEllement.classList.add("addToCart");
    addButtonEllement.innerText = "+";
    addButtonEllement.style.fontSize = "50px";
    addButtonEllement.style.display = "none";
    FavoriteElement.onclick = (e) => {
      if (shoes[i].favorite == true) {
        shoes[i].favorite = false;
        FavoriteElement.style.color = "#aaa";
      } else {
        shoes[i].favorite = true;
        FavoriteElement.style.color = "red";
        FavoriteElement.style.animation = "";
        FavoriteElement.offsetWidth;
        FavoriteElement.style.animation = "size 1s linear";
      }

      saveToLocalStorage(shoes);
    };

    addButtonEllement.onclick = (e) => {
      if (shoes[i].isSelected) {
        addButtonEllement.style.top = "60%";
        addButtonEllement.style.width = "200px";
        addButtonEllement.style.height = "50px";
        addButtonEllement.style.left = "50%";
        addButtonEllement.style.opacity = "0.6";
        addButtonEllement.style.borderRadius = "25px";
        contact.style.display = "";
        sum--;
      } else {
        sum++;
        addButtonEllement.style.borderRadius = "0px";
        addButtonEllement.style.opacity = "0.6";
        addButtonEllement.style.top = "50%";
        addButtonEllement.style.width = "100%";
        addButtonEllement.style.height = "100%";
        addButtonEllement.style.left = "50%";
        contact.style.display = "none";
        document.getElementById("cartLogo").style.animation = "";
        void document.getElementById("cartLogo").offsetWidth;
        document.getElementById("cartLogo").style.animation =
          "rotation 1s linear";
      }

      shoes[i].isSelected = !shoes[i].isSelected;
      saveToLocalStorage(shoes);
      document.getElementById("demo").innerText = sum;
    };

    shoesEllementDiv.classList.add("shoesImage");
    const buttonDivEllement = document.createElement("div");
    buttonDivEllement.appendChild(addButtonEllement);
    buttonDivEllement.appendChild(contact);
    buttonDivEllement.appendChild(FavoriteElement);
    buttonDivEllement.classList.add("buttonDiv");

    shoesEllementDiv.onmouseenter = (e) => {
      if (contact.innerText == "description") {
        addButtonEllement.style.display = "";
      }
      if (!shoes[i].isSelected) {
        contact.style.display = "";
      }
    };
    contact.onclick = (e) => {
      if (contact.style.width == "200px") {
        contact.style.borderRadius = "0px";
        contact.style.opacity = "0.6";
        contact.style.top = "50%";
        contact.style.width = "100%";
        contact.style.height = "100%";
        contact.style.left = "50%";
        contact.innerText = shoesEllementContact.innerText;
        addButtonEllement.style.display = "none";
      } else {
        contact.style.borderRadius = "25px";
        contact.style.opacity = "0.6";
        contact.style.top = "42%";
        contact.style.width = "200px";
        contact.style.height = "50px";
        contact.style.left = "50%";
        contact.innerText = "description";
        addButtonEllement.style.display = "";
      }
    };
    if (shoes[i].favorite) {
      FavoriteElement.style.color = "red";
    }
    shoesEllementDiv.onmouseleave = (e) => {
      contact.style.borderRadius = "25px";
      contact.style.opacity = "0.6";
      contact.style.top = "42%";
      contact.style.width = "200px";
      contact.style.height = "50px";
      contact.style.left = "50%";
      contact.innerText = "description";
      contact.style.display = "none";
      if (shoes[i].isSelected) {
        addButtonEllement.style.display = "block";
      } else {
        addButtonEllement.style.display = "none";
      }
    };

    if (shoes[i].isSelected) {
      addButtonEllement.style.borderRadius = "0px";
      addButtonEllement.style.opacity = "0.6";
      addButtonEllement.style.top = "50%";
      addButtonEllement.style.width = "100%";
      addButtonEllement.style.height = "100%";
      addButtonEllement.style.left = "50%";

      addButtonEllement.style.display = "block";
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
    const element = document.getElementById("demo");
    if (element) {
      element.innerText = sum;
    }
  }
}
