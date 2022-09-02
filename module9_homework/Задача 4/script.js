let inputFirst = document.getElementById('inputFirst');
let inputSec = document.getElementById('inputSec');
let button = document.getElementById('button');
let result = document.getElementById('result');
button.addEventListener('click', () => {
    let one = inputFirst.value;
    let two = inputSec.value;
    if ((one >= 100 && one <= 300) && (two >= 100 && two <= 300)) {
        fetch (`https://picsum.photos/${one}/${two}`)
        .then((response) => {
            result.innerHTML = `<img src=${response.url}>`;
        })
        .catch (() => {
            result.innerHTML = `error`;
        })
    } else {
        result.innerHTML = `Одно из чисел вне диапазона от 100 до 300`;
    }
});