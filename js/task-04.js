const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value")

let counterValue = 0;

buttonDecr.addEventListener("click", () => {
    valueEl.textContent = counterValue-= 1
})

buttonIncr.addEventListener("click", () => {
    valueEl.textContent = counterValue+= 1
})