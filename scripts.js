
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a* b;
}

function divide(a, b) {
    if (b !== 0){
        return a / b;
    } else {
        return '0 Division Error';
    }
    
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return substract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            console.log('no such operator');
    }
}

let displayNumber = '';
let prevNumber = '';
let operator = '';

const btnNumbers = document.querySelectorAll('.btn-number');
const btnDot = document.querySelector('#dot');
const btnOperators = document.querySelectorAll('.btn-operator');
const btnEqual = document.querySelector('#equals');
const btnClear = document.querySelector('#clear');
const btnErase = document.querySelector('#erase');
const screen = document.querySelector('#screen');

function dotState() {
    if (screen.innerText.indexOf('.') !== -1) {
        btnDot.disabled = true;
    } else {
        btnDot.disabled = false;
    }
}

btnNumbers.forEach(button => {
    button.addEventListener('click', () => {
        displayNumber = displayNumber + button.dataset.number;
        screen.innerText = displayNumber;
        dotState()
    });
});

btnOperators.forEach(button => {
    button.addEventListener('click', () => {
        if (!operator){
            prevNumber = displayNumber;   
        } else {
            prevNumber = operate(operator, prevNumber, displayNumber);
        }
        operator = button.dataset.operator;
        displayNumber = '';
        screen.innerText = displayNumber;
        dotState()
    });   
});

btnEqual.addEventListener('click', () => {
    if (prevNumber && displayNumber && operator) {
        displayNumber = operate(operator, prevNumber, displayNumber);
        prevNumber = '';
        screen.innerText = displayNumber;
        operator = '';
    }
    dotState()
});

btnClear.addEventListener('click', () => {
    operator = '';
    prevNumber = '';
    displayNumber = '';
    screen.innerText = displayNumber;
    dotState()
});

btnErase.addEventListener('click', () => {
    if (displayNumber) {
        displayNumber = displayNumber.slice(0, -1);
        screen.innerText = displayNumber;
        dotState()
    }
});


// keyboard support
keydown = function(e){
    if (e.keyCode == '49' || e.keyCode == '97') {
        document.getElementById('1').click();     
    } else if (e.keyCode == '50' || e.keyCode == '98') {
        document.getElementById('2').click();     
    } else if (e.keyCode == '51' || e.keyCode == '99') {
        document.getElementById('3').click();     
    } else if (e.keyCode == '52' || e.keyCode == '100') {
        document.getElementById('4').click();     
    } else if (e.keyCode == '53' || e.keyCode == '101') {
        document.getElementById('5').click();     
    } else if (e.keyCode == '54' || e.keyCode == '102') {
        document.getElementById('6').click();     
    } else if (e.keyCode == '55' || e.keyCode == '103') {
        document.getElementById('7').click();     
    } else if (e.keyCode == '56' || e.keyCode == '104') {
        document.getElementById('8').click();     
    } else if (e.keyCode == '57' || e.keyCode == '105') {
        document.getElementById('9').click();
    } else if (e.keyCode == '48' || e.keyCode == '96') {
        document.getElementById('0').click(); 
    } else if (e.keyCode == '107' || e.keyCode == '187') {
        document.getElementById('+').click();     
    } else if (e.keyCode == '109' || e.keyCode == '189') {
        document.getElementById('-').click();     
    } else if (e.keyCode == '106') {
        document.getElementById('*').click();     
    } else if (e.keyCode == '111') {
        document.getElementById('/').click(); 
    } else if (e.keyCode == '190' || e.keyCode == '110') {
        document.getElementById('dot').click();
    } else if (e.keyCode == '13') {
        document.getElementById('equals').click();
    } else if (e.keyCode == '8') {
        document.getElementById('erase').click();     
    } else if (e.keyCode == '46') {
        document.getElementById('clear').click();     
    }
}
document.onkeydown = keydown