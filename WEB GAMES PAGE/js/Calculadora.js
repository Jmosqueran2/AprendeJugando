let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (operator && operand1) {
        operand2 = currentInput;
        calculate();
    } else {
        operand1 = currentInput;
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    if (operator && operand1) {
        operand2 = currentInput;
        const result = eval(`${operand1} ${operator} ${operand2}`);
        currentInput = result;
        operand1 = result;
        operator = '';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput || '0';
}
