function saveToLocalStorage(shoes) {
  localStorage.setItem("shoes", JSON.stringify(shoes));
}

if (!localStorage.getItem("shoes")) saveToLocalStorage(shoes);
const currentShoes = JSON.parse(localStorage.getItem("shoes"));
createShoes(currentShoes);

function searched() {
  const searched = document.getElementById("search_box_input").value;
  const shoesElements = document.getElementsByClassName("shoes");
  let shoesMatches = 0;

  for (let i = 0; i < shoesElements.length; i++) {
    if (
      !shoesElements[i]
        .getElementsByClassName("shoesName")[0]
        .innerText.includes(searched)
    ) {
      shoesElements[i].style.display = "none";
    } else {
      shoesMatches++;
      shoesElements[i].style.display = "inline-block";
    }
  }

  const errorMessage = document.getElementById("error");
  if (!shoesMatches) errorMessage.style.display = "block";
  else {
    errorMessage.style.display = "none";
  }
}

function filter() {
  const label = document.getElementById("label").value;
  const catagory = document.getElementById("catagory").value;
  console.log(label, catagory);

  let shoesMatches = 0;

  const shoesEllements = document.getElementsByClassName("shoes");

  for (let i = 0; i < shoesEllements.length; i++) {
    if (
      shoesEllements[i].classList.contains(label) &&
      shoesEllements[i].classList.contains(catagory)
    ) {
      shoesEllements[i].style.display = "";
      shoesMatches++;
    } else {
      shoesEllements[i].style.display = "none";
    }
  }

  const errorMessage = document.getElementById("error");
  if (!shoesMatches) errorMessage.style.display = "block";
  else {
    errorMessage.style.display = "none";
  }
}
