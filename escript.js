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
const historyList = document.getElementById('history-list');
let history = [];

form.addEventListener('submit', function(event) {
    // (seu código de cálculo já existente fica aqui...)
    
    // Após calcular, adicione estas linhas para o histórico:
    const entry = `${num1} ${operation} ${num2} = ${result}`;
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