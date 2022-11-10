const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const listIngredients = ingredients.map((ingredient) => {
  const itemIngredient = document.createElement('li');
  itemIngredient.classList.add('item');
  itemIngredient.textContent = ingredient;
  return itemIngredient;
});

ingredientsEl.append(...listIngredients);