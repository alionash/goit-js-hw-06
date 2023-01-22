
const categoriesEl = document.querySelectorAll('li.item');
console.log("Number of categories:", categoriesEl.length);

const categoriesInformation = categoriesEl.forEach((category) => {
    console.log("Category:", category.firstElementChild.textContent)
    console.log("Elements:" , category.querySelectorAll('li').length)
});