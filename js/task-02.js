const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listUl = document.getElementById("ul");

// for (const ingredient of ingredients) {
//   const liElem = document.createElement("li");
//   liElem.textContent = ingredient;
//   liElem.classList.add("item");
//   listUl.appendChild(...liElem);
// }

const ingredientsUl = document.querySelector("#ingredients");

const ingredientEl = ingredients.map((ingredient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  return liElem;
})

ingredientsUl.append(...ingredientEl);

console.log(ingredientsUl);

