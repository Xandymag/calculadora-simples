const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');
form.addEventListener('submit', function(event) {
    event.preventDefault();const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
    }resultDiv.textContent = `Resultado: ${result}`;
});