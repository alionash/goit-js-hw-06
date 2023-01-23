const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

input.addEventListener('input', onImputChange)

function onImputChange(event) {
    input.range = event.currentTarget.value;
    spanText.style.fontSize = `${event.target.value}px`;
    console.log(spanText.textContent);
}
