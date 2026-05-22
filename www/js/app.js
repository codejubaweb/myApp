let displayElement = document.getElementById('display');
let currentExpression = '';
function updateDisplay(value) { displayElement.innerText = value || '0'; }
function appendNumber(number) {
    if (currentExpression === '0' && number !== '.') currentExpression = number;
    else currentExpression += number;
    updateDisplay(currentExpression);
}
function appendOperator(operator) {
    if (currentExpression === '') return;
    const lastChar = currentExpression.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) currentExpression = currentExpression.slice(0, -1) + operator;
    else currentExpression += operator;
    updateDisplay(currentExpression);
}
function clearDisplay() { currentExpression = ''; updateDisplay('0'); }
function deleteLast() { currentExpression = currentExpression.slice(0, -1); updateDisplay(currentExpression); }
function calculate() {
    try {
        if (currentExpression === '') return;
        let result = eval(currentExpression);
        if (!Number.isInteger(result)) result = result.toFixed(6).replace(/\.?0+$/, "");
        currentExpression = String(result);
        updateDisplay(currentExpression);
    } catch (error) { updateDisplay('Error'); currentExpression = ''; }
}
