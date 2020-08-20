var boxElement = document.querySelector('#box');
var codeElement = document.querySelector('#code');
var inputElement = document.querySelectorAll('input');

for (input of inputElement) {
    input.setAttribute('min', '0');
    input.setAttribute('max', '100');
    input.setAttribute('step', '10');
    input.setAttribute('value', '20');
    input.setAttribute('onchange', 'changeRadius()');
}

function changeRadius() {
    var valor = '';
    for (var i = 0; i < 8; i += 2) {
        valor += inputElement[i].value + '% ';
    }
    valor += '/ '
    for (var i = 1; i < 8; i += 2) {
        valor += inputElement[i].value + '% ';
    }
    boxElement.style.borderRadius = valor;
    codeElement.innerText = 'border: ' + valor + ';';
}

codeElement.onclick = function () {
    codeElement.select();
    codeElement.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
