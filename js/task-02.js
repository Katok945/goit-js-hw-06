const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

  const linkEl = document.createElement("li");
  linkEl.textContent = `${ingredients[0]}`;
  linkEl.classList.add('item');

console.log(linkEl);

const newListElements = [];

ingredients.forEach((element) => {
  const linkEl = document.createElement("li");
  linkEl.textContent = `${element}`;
  linkEl.classList.add('item');

  return newListElements.push(linkEl);
});
console.log(newListElements);

listEl.append(...newListElements);

