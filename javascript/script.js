var boxElement = document.querySelector('#box');
var codeElement = document.querySelector('#code');
var inputElements = document.querySelectorAll('input')

var topLeft = document.querySelector('input#topLeft');
var topRight = document.querySelector('input#topRight');
var bottomLeft = document.querySelector('input#bottomLeft');
var bottomRight = document.querySelector('input#bottomRight');

for (input of inputElements) {
    input.setAttribute('min', '0');
    input.setAttribute('max', '100');
    input.setAttribute('step', '1');
    input.setAttribute('value', Math.floor(Math.random()*100));
    input.setAttribute('onchange', 'changeRadius()');
}

// a a d d / c b b c;

function changeRadius() {
    var valor = topLeft.value + '% ' + (100 - topLeft.value) + '% ' + bottomRight.value + '% ' + (100 - bottomRight.value) + '% / ' + bottomLeft.value + '% ' + topRight.value + '% ' + (100 - topRight.value) + '% ' + (100 - bottomLeft.value) + '%';
    boxElement.style.borderRadius = valor;
    codeElement.innerHTML = 'border: <span>' + valor + '</span>;';
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

changeRadius()
