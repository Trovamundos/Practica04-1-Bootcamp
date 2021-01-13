//NUMBERS
var operationNumbersFunction = () => {
    numberA = parseInt(document.getElementById('numberA').value);
    numberB = parseInt(document.getElementById('numberB').value);
    if(isNaN(numberA) || isNaN(numberB)){
        alert('Por favor, rellene los campos necesarios');
    }
}

//OPERATOR SIGN
var operationSignFunction = (operationSign) => operationResultFunction(operationSign);

//OPERATION
var operationFunction = (operationSign) => {
    switch(operationSign) {
        case 'sum':
            result = numberA + numberB;
            document.getElementById('operationSpan').innerHTML = '+';
            break;
        case 'subtraction':
            result = numberA - numberB;
            document.getElementById('operationSpan').innerHTML = '-';
            break;
        case 'multiplication':
            result = numberA * numberB;
            document.getElementById('operationSpan').innerHTML = 'x';
            break;
        case 'division':
            result = numberA / numberB;
            document.getElementById('operationSpan').innerHTML = '/';
            break;   
    }
}

//RESULT
var operationResultFunction = (operationSign) => {
    operationNumbersFunction();
    operationFunction(operationSign);
    document.getElementById('result').value = result;
}

document.getElementById('sum').addEventListener('click', function() {operationSignFunction('sum');});
document.getElementById('subtraction').addEventListener('click', function() {operationSignFunction('subtraction');});
document.getElementById('multiplication').addEventListener('click', function() {operationSignFunction('multiplication');});
document.getElementById('division').addEventListener('click', function() {operationSignFunction('division');});