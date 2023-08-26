function addToInput(value) {
    var inputField = document.getElementById('inputField');
    inputField.value += value;
}

function calculateResult() {
    var inputField = document.getElementById('inputField');
    var resultField = document.getElementById('resultField');

    var expression = inputField.value;
    var result = eval(expression);

    resultField.value = result;
}

function clearFields() {
    var inputField = document.getElementById('inputField');
    var resultField = document.getElementById('resultField');

    inputField.value = '';
    resultField.value = '';
}