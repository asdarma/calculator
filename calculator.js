
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

function setOperation() {

}

function updateDisplay() {
    display.textContent = 'hi';
}

function appendDisplay() {
    console.log('button');
    
}