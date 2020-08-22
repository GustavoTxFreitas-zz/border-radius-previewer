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
    codeElement.innerHTML = 'border: <span>' + valor.trim() + '</span>;';
}

codeElement.onclick = function () {
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(codeElement);
        range.select();
        document.execCommand('copy');
    }
    else if (window.getSelection) {
        // other browsers

        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(codeElement);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    }
}
