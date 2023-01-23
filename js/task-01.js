
const items = document.querySelectorAll('li.item');
const categories = document.querySelector('#categories')
console.log("Number of categories:", categories.childElementCount);

const categoriesInformation = items.forEach((category) => {
    console.log("Category:", category.firstElementChild.textContent)
    console.log("Elements:" , category.lastElementChild.childElementCount)
});