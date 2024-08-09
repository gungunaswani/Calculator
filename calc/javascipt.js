    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    let currentNumber = '';
    let previousNumber = '';
    let operation = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value >= '0' && value <= '9') {
                currentNumber += value;
                display.value = currentNumber;
            } else if (value === '+') {
                operation = 'add';
                previousNumber = currentNumber;
                currentNumber = '';
            } else if (value === '-') {
                operation = 'subtract';
                previousNumber = currentNumber;
                currentNumber = '';
            } else if (value === '*') {
                operation = 'multiply';
                previousNumber = currentNumber;
                currentNumber = '';
            } else if (value === '/') {
                operation = 'divide';
                previousNumber = currentNumber;
                currentNumber = '';
            } else if (value === '=') {
                if (operation === 'add') {
                    currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
                } else if (operation === 'subtract') {
                    currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
                } else if (operation === 'multiply') {
                    currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
                } else if (operation === 'divide') {
                    currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
                }
                display.value = currentNumber;
                previousNumber = '';
                operation = '';
            } else if (value === 'C') {
                currentNumber = '';
                previousNumber = '';
                operation = '';
                display.value = '';
            } else if (value === 'Backspace' || value === 'Del' || value === 'Delete') {
                currentNumber = currentNumber.slice(0, -1);
                display.value = currentNumber;
            }
            
            
            
        });
    });

    document.addEventListener('keydown', event => {
        const value = event.key;
        if (value >= '0' && value <= '9') {
            currentNumber += value;
            display.value = currentNumber;
        } else if (value === '+') {
            operation = 'add';
            previousNumber = currentNumber;
            currentNumber = '';
        } else if (value === '-') {
            operation = 'subtract';
            previousNumber = currentNumber;
            currentNumber = '';
        } else if (value === '*') {
            operation = 'multiply';
            previousNumber = currentNumber;
            currentNumber = '';
        } else if (value === '/') {
            operation = 'divide';
            previousNumber = currentNumber;
            currentNumber = '';
        } else if (value === '=') {
            if (operation === 'add') {
                currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
            } else if (operation === 'subtract') {
                currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
            } else if (operation === 'multiply') {
                currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
            } else if (operation === 'divide') {
                currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
            }
            display.value = currentNumber;
            previousNumber = '';
            operation = '';
        } else if (value === 'Backspace') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (value === 'Delete') {
            currentNumber = '';
            previousNumber = '';
            operation = '';
            display.value = '';
        }
    });
