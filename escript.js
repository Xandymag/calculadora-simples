const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
    }

    resultDiv.textContent = `Resultado: ${result}`;
});

function limparResultado() {
    // Limpa o texto do resultado
    document.getElementById("result").textContent = "";
    
    // Dica extra (opcional): se quiser limpar também os campos onde o usuário digita
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

}
const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');
const historyList = document.getElementById('history-list');
const historyContainer = document.getElementById('history-container');

let history = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const num1Val = parseFloat(document.getElementById('num1').value);
    const num2Val = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    let result = 0;
    let symbol = '+';

    switch (operation) {
        case 'add':
            result = num1Val + num2Val;
            symbol = '+';
            break;
        case 'subtract':
            result = num1Val - num2Val;
            symbol = '-';
            break;
        case 'multiply':
            result = num1Val * num2Val;
            symbol = '×';
            break;
        case 'divide':
            result = num2Val !== 0 ? num1Val / num2Val : 'Erro (divisão por zero)';
            symbol = '÷';
            break;
    }

    resultDiv.textContent = `Resultado: ${result}`;

    const entry = `${num1Val} ${symbol} ${num2Val} = ${result}`;
    history.push(entry);
    
    updateHistoryUI();
});

function updateHistoryUI() {
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function toggleHistory() {
    if (historyContainer.style.display === 'none') {
        historyContainer.style.display = 'block';
    } else {
        historyContainer.style.display = 'none';
    }
}

function limparHistorico() {
    history = [];
    updateHistoryUI();
}

function limparResultado() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    resultDiv.textContent = '';
}