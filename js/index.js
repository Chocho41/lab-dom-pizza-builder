// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`*
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPeppers => {
    if (state.greenPeppers) {
      oneGreenPeppers.style.visibility = 'visible';
    } else {
      oneGreenPeppers.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(oneSauceWhite => {
    const whiteSauce = document.querySelector(".sauce")
      console.log(whiteSauce);
      whiteSauce.classList.toggle("sauce-white")
    });
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(oneGlutenFreeCrust=> {
    const crust1 = document.querySelector(".crust")
      console.log(crust1);
      crust1.classList.toggle("crust-gluten-free")
  }); 
}

function renderButtons(evt) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 //console.log(evt.target);
  //const clickedButton = evt.target;
  //clickedButton.classList.toggle("is-active");

const active1 = document.querySelectorAll(".btn");
console.log(active1);
if(state.pepperoni === true) {
  document.querySelector(".btn-pepperoni").classList.add("active");
  console.log(btnPep);
} else{
  document.querySelector(".btn-pepperoni".classList.remove("active"));
};
if(state.mushrooms === true) {
  document.querySelector(".btn-mushrooms").classList.add("active");
  console.log(btnPep);
} else{
  document.querySelector(".btn-mushrooms".classList.remove("active"));
};
if(state.greenPeppers === true) {
  document.querySelector(".btn-green-peppers").classList.add("active");
  console.log(btnPep);
} else{
  document.querySelector(".btn-green-peppers".classList.remove("active"));
};
if(state.whiteSauce === true) {
  document.querySelector(".btn-sauce").classList.add("active");
  console.log(btnPep);
} else{
  document.querySelector(".btn-sauce".classList.remove("active"));
};
if(state.glutenFreeCrust === true) {
  document.querySelector(".btn-crust").classList.add("active");
  console.log(btnPep);
} else{
  document.querySelector(".btn-crust".classList.remove("active"));
};

}



function renderPrice(prices) {
// Iteration 4: change the HTML of `<aside class="panel price">`
ingredients.foreach((ingredient) => {
  const list = document.createElement("ul");
  list.className = "price-ingredient";
  
  const markupPepperoni = 
    `<li> $1 ${ingredient.name}</li>`;
  const markupMushroom = 
  `<li> $1 pepperoni</li>`;
  const markupGreenPeppers = 
    `<li> $1 pepperoni</li>`;
  const markupWhiteSauce = 
    `<li> $3 pepperoni</li>`;
  const markupGlutenFreeCrust = 
    `<li> $5 pepperoni</li>`;
  
  const pepperoniPrice = document.getElementById("pepperoni-price");
  const mushroomsPrice = document.getElementById("mushroom-price");
  const greenPeppersPrice = document.getElementById("green-pepper-price");
  const whiteSaucePrice = document.getElementById("white-sauce-price");
  const glutenFreeCurstPrice = document.getElementById("gluten-free-crust-price");

  let totalPrice = 10;
  
  if(state.pepperoni === true) {
    list.innerHTML = markupPepperoni;
    listPrice.appendChild(card);
    totalPrice =+ 1;
  } else {
    pepperoniPrice.remove();
  };
  if(state.mushrooms === true) {
    priceIngredient.innerHTML = markupMushroom;
    listPrice.appendChild(card);
    totalPrice =+ 1;
  } else {
    mushroomsPrice.remove();
  };
  if(state.greenPeppers === true) {
    priceIngredient.innerHTML = markupGreenPeppers;
   listPrice.appendChild(card);
   totalPrice =+ 1;
  } else {
    greenPeppersPrice.remove();
  };
  if(state.whiteSauce === true) {
  priceIngredient.innerHTML = markupWhiteSauce;
  listPrice.appendChild(card);
  totalPrice =+ 3;
} else {
  whiteSaucePrice.remove();
};
  if(state.glutenFreeCrust === true) {
  priceIngredient.innerHTML = markupGlutenFreeCrust;
  listPrice.appendChild(card);
  totalPrice =+ 5;
} else {
  glutenFreeCurstPrice.remove();
};
});

totalPriceMarkup = `${totalPrice}`;

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});