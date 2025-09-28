'use strict';

const buttons = document.querySelectorAll('.btn');
const inputField = document.getElementById('number');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equals');
const operators = document.querySelectorAll('.operator');
const deleteButton = document.getElementById('delete');


deleteButton.addEventListener('click', () => {
    inputField.value = inputField.value.slice(0, -1);
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        inputField.value += button.textContent;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        const lastChar = inputField.value.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            inputField.value = inputField.value.slice(0, -1) + operator.textContent;
        } else if (inputField.value !== '') {
            inputField.value += operator.textContent;
        }
    });
});

clearButton.addEventListener('click', () => {
    inputField.value = '';
});

equalButton.addEventListener('click', () => {
    try {
        const result = eval(inputField.value);
        inputField.value = result;
    } catch (error) {
        inputField.value = 'Error';
    }
});

inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        equalButton.click();
    }
});

inputField.addEventListener('input', () => {
    inputField.value = inputField.value.replace(/[^0-9+\-***/.]/g, '');
  
}); // Allow only numbers and operators in the input field              

