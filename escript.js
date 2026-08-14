const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');
const historyList = document.getElementById('history-list');
const historyContainer = document.getElementById('history-container');

// Mudei o nome para 'historicoContas' para evitar conflito com o navegador
let historicoContas = []; 

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    let result;
    let symbol = '+';

    if (operation === 'add') {
        result = num1 + num2;
        symbol = '+';
    } else if (operation === 'subtract') {
        result = num1 - num2;
        symbol = '-';
    } else if (operation === 'multiply') {
        result = num1 * num2;
        symbol = 'x';
    } else if (operation === 'divide') {
        result = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
        symbol = '÷';
    }

    resultDiv.textContent = `Resultado: ${result}`;

    // Só adiciona ao histórico se não for um erro
    if (result !== 'Erro: Divisão por zero') {
        const entry = `${num1} ${symbol} ${num2} = ${result}`;
        historicoContas.push(entry);
        updateHistoryUI();
    }
});

// Função para atualizar a lista do histórico na tela
function updateHistoryUI() {
    historyList.innerHTML = '';
    historicoContas.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Função para mostrar ou esconder o histórico
function toggleHistory() {
    if (historyContainer.style.display === 'none' || historyContainer.style.display === '') {
        historyContainer.style.display = 'block';
    } else {
        historyContainer.style.display = 'none';
    }
}

// Função para zerar o array de histórico e limpar a tela
function limparHistorico() {
    historicoContas = [];
    updateHistoryUI();
}

// Função para limpar os inputs e o resultado atual
function limparResultado() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    resultDiv.textContent = '';
}