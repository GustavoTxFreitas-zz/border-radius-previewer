var boxElement = document.querySelector('#box');
var codeElement = document.querySelector('#code');
var alertElement = document.querySelector('#alert');
var inputElements = document.querySelectorAll('input');

var topLeft = document.querySelector('input#topLeft');
var topRight = document.querySelector('input#topRight');
var bottomLeft = document.querySelector('input#bottomLeft');
var bottomRight = document.querySelector('input#bottomRight');

// define input's default atributes
for (input of inputElements) {
    input.setAttribute('min', '0');
    input.setAttribute('max', '100');
    input.setAttribute('step', '1');
    input.setAttribute('value', Math.floor(Math.random() * 100));
    input.setAttribute('oninput', 'changeRadius()');
}

function changeRadius() {
    var a = topLeft.value;
    var b = topRight.value;
    var c = bottomLeft.value;
    var d = bottomRight.value;

    var radiusValue =
    a + '% ' + (100 - a) + '% '
    + d + '% ' + (100 - d) + '% / '
    + c + '% ' + b + '% '
    + (100 - b) + '% ' + (100 - c) + '%';

    boxElement.style.borderRadius = radiusValue;
    codeElement.innerHTML = 'border: <span>' + radiusValue + '</span>;';
}

codeElement.onclick = function copyToClipboard() {
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(codeElement);
        range.select();
        document.execCommand('copy');
    }
    else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(codeElement);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    }

    alertElement.style.opacity = 1;
    setTimeout(
        function(){
            alertElement.style.opacity = 0;
        }, 3000);

}

// initial state
changeRadius();