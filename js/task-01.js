// -----------------------version 1
// const arrayCategories = document.querySelectorAll('.item');
// console.log(`Number of categories: ${arrayCategories.length}`);

// arrayCategories.forEach((item) => {
//     console.log('');
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`);
// });

// -----------------------version 2
const arrayCategories = document.querySelector('#categories');
const numberOfCategories = arrayCategories.children;
console.log(`Number of categories: ${numberOfCategories.length}`);

const categoriesList = document.querySelectorAll('.item');

categoriesList.forEach(item => {
  console.log('');
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});