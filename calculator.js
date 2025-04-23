
// Declaring variables
let currentDisplay = '0';
let previousDisplay = '';
let resetDisplay = false;   // flag
let operation = null;

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
    if (operation !== null) calculate();
    previousDisplay = currentDisplay;
    operation = value;
    resetDisplay = true;
}

function updateDisplay() {
    display.textContent = currentDisplay;
}

function appendDisplay() {
    console.log('number');
    
}

function calculate() {
    console.log('calc')
}

function clearDisplay() {
    console.log('clear')
}