var boxElement = document.querySelector('#box');
var inputElement = document.querySelectorAll('input');

for (input of inputElement) {
    input.setAttribute('min', '0');
    input.setAttribute('max', '100');
    input.setAttribute('step', '10');
    input.setAttribute('value', '20');
    input.setAttribute('onchange', 'changeRadius()');
}

function changeRadius() {
    boxElement.style.borderTopLeftRadius = inputElement[0].value + '% ' + inputElement[1].value + '%';

    boxElement.style.borderTopRightRadius = inputElement[2].value + '% ' + inputElement[3].value + '%';

    boxElement.style.borderBottomLeftRadius = inputElement[4].value + '% ' + inputElement[5].value + '%';

    boxElement.style.borderBottomRightRadius = inputElement[6].value + '% ' + inputElement[7].value + '%';
}
