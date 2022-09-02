let inputFirst = document.getElementById('inputFirst');
let inputSec = document.getElementById('inputSec');
let button = document.getElementById('button');
let result = document.getElementById('result');
function validateValue(value, valuesRange) {
    return typeof value === 'number' && !isNaN(value) && value >= valuesRange[0] && value <= valuesRange[1];
}
function sendRequest(page, limit) {
    let url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        let response = JSON.parse(xhr.response);
        let images = ``;
        localStorage.clear();
        for (let img of response) {
            images += `<img src="${img.download_url}" width="300px">`;
        }
        localStorage.setItem('images', images);
        result.innerHTML = images;
    }
    xhr.send();
}
button.addEventListener('click', () => {
    let page = +inputFirst.value;
    let limit = +inputSec.value;
    let valuesRange = [1, 10];
    if (validateValue(page, valuesRange) && validateValue(limit, valuesRange)) {
        sendRequest(page, limit);
    } else if (validateValue(page, valuesRange)) {
        result.innerText = 'Лимит вне диапазона от 1 до 10';
    } else if (validateValue(limit, valuesRange)) {
        result.innerText = 'Номер страницы вне диапазона от 1 до 10';
    } else {
        result.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    let imagesHTML = localStorage.getItem('images');
    if (imagesHTML) {
        result.innerHTML = imagesHTML;
    }
});