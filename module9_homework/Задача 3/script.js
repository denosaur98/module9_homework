let input = document.getElementById('input');
let button = document.getElementById('button');
let result = document.getElementById('result');
const url = 'https://picsum.photos/v2/list?limit=';
const checkInputValueLimit = url => {
    const inputResult = input.value
if (1 <= inputResult && inputResult <= 10) {
    const limit = url + inputResult
    xhrRequest(limit)
} else {
    result.innerHTML = `Число вне диапазона от 1 до 10`
    }
};
const xhrRequest = limit => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', limit, true);
    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.log('Status is', xhr.status)
        } else if (xhr.oneerror) {
            console.log('Error. Status is', xhr.status)
        } else {
            const response = JSON.parse(xhr.response)
            displayResult(response)
        }
    }
    xhr.send();
};
const displayResult = apiData => {
    const resultData = apiData.map(item => `<div class="card"><img src="${item.download_url}" class="card-image"/><p>${item.author}</p></div>`);
    result.innerHTML = resultData.join('')
};
button.addEventListener('click', () => {
    checkInputValueLimit(url)
});