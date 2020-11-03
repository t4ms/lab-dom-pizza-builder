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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGrePep => {
    if (state.greenPeppers) {
      oneGrePep.style.visibility = 'visible';
    } else {
      oneGrePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauceEle = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceEle.classList.add("sauce-white");
  } else {
    sauceEle.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  let crustEle = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustEle.classList.add("crust-gluten-free");
  } else {
    crustEle.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(onebtn => {
    if (state.mushrooms) {
      onebtn.classList.add("active");
    } else {
      onebtn.classList.remove("active");
    }
  });


}
  
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();


document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});


document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
