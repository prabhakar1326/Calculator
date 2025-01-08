const screen = document.querySelector('.cal-screen');

const buttons = document.querySelectorAll('.btn, .artbtn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerText;


        if (!isNaN(value)) {
            currentInput += value;
            screen.textContent = currentInput;
        }


        else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
                screen.textContent = operator;
            }
        }

        else if (value === '=') {
            if (previousInput && currentInput && operator) {
                const result = calculate(previousInput, currentInput, operator);
                screen.textContent = result;
                previousInput = result;
                currentInput = '';
                operator = '';
            }
        }

        else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            screen.textContent = '';
        }
    });
});

function calculate(a, b, op) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error';
        default:
            return '';
    }
}
