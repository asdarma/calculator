
// Declaring variables
let currentInput = '0';
let nextInput = '';
let operator = null
let resetFlag = false;

// Get elements
const display = document.getElementById('display');
const button = document.querySelectorAll('button');

    button.forEach(button => {
        const value = button.textContent;
        if (['x', '÷', '+', '-'].includes(value)) {
            button.onclick = () => {
                setOperation(value);
            }
        }
    })

// Handle operation
function setOperation(value) {
    if (operator !== null) calculate();
    nextInput = currentInput;
    operator = value;
    resetFlag = true;
}

function updateDisplay() {
    display.textContent = currentInput;
}

function appendDisplay(value) {
    if (currentInput === '0' || resetFlag) {
        currentInput = '';
        resetFlag = false;
    }
    if (value === '.' && currentInput.includes('.')) {
        return;
    }
    currentInput += value;
    updateDisplay();
}

function calculate() {
    let result;
    num1 = parseFloat(currentInput);
    num2 = parseFloat(nextInput);

    switch (operator) {
    case'x': result = num1 * num2; break;
    case'÷': result = num1 / num2; break;
    case'+': result = num1 + num2; break;
    case'-': result = num1 - num2; break;
    default: return;
    }

    currentInput = result
    operator = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    nextInput = '';
    operator = null;
    resetFlag = false;
    updateDisplay();
}