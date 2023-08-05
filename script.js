//
// Clone Calculadora iOS
//

//Definindo Variáveis
let valorDisplay = '0';
let operacao = '';
let valorAnterior = 0;

//Funções
//
//
//Atualizar o Display
function atualizaDisplay() {
	const display = document.getElementById('display');
	display.textContent = valorDisplay;
}

//Inserir os números
function inserirNumero(num) {
	if (valorDisplay === '0') {
		valorDisplay = num;
	} else {
		valorDisplay += num;
	}
	atualizaDisplay();
}

//Limpar o Display
function limpaDisplay() {
	valorDisplay = '0';
	operacao = '';
	valorAnterior = 0;
	atualizaDisplay();
}

//Mudança de Sinal
function mudaSinal() {
	valorDisplay = valorDisplay * -1;
	atualizaDisplay();
}

//Calculo de Porcentagem
function porcent() {
	valorDisplay = valorDisplay / 100;
	atualizaDisplay();
}

//Verifica se existe um operador
function operador(op) {
	if (operacao != '') {
		resultado();
	}
	operacao = op;
	valorAnterior = parseFloat(valorDisplay);
	valorDisplay = '0';
	atualizaDisplay();
}

//Cálculo do Resultado
function resultado() {
	const valorAtual = parseFloat(valorDisplay);
	switch (operacao) {
		case '/':
			valorDisplay = (valorAnterior / valorAtual).toString();
			break;

		case 'x':
			valorDisplay = (valorAnterior * valorAtual).toString();
			break;

		case '-':
			valorDisplay = (valorAnterior - valorAtual).toString();
			break;

		case '+':
			valorDisplay = (valorAnterior + valorAtual).toString();
			break;

		default:
			break;
	}
	operacao = '';
	atualizaDisplay();
}

//Chamando Função para atualizar tela
atualizaDisplay();

let displayValue = '0';
let operator = '';
let prevValue = 0;

function displayUpdate() {
	const display = document.getElementById('display');
	display.textContent = displayValue;
}

function clearDisplay() {
	displayValue = '0';
	operator = '';
	prevValue = 0;

	displayUpdate();
}

function appendOperator(op) {
	if (operator !== '') {
		calculateResult();
	}
	operator = op;
	prevValue = parseFloat(displayValue);

	displayValue = '0';

	displayUpdate();
}

function changeSignal() {
	displayValue = displayValue * -1;
	displayUpdate();
}

function percentage() {
	displayValue = displayValue / 100;
	displayUpdate();
}

function calculateResult() {
	const currentValue = parseFloat(displayValue);
	switch (operator) {
		case '+/-':
			displayValue = (prevValue * -1).toString();
			displayUpdate();
			break;
		case '/':
			displayValue = (prevValue / currentValue).toString();
			break;
		case 'x':
			displayValue = (prevValue * currentValue).toString();
			break;
		case '-':
			displayValue = (prevValue - currentValue).toString();
			break;
		case '+':
			displayValue = (prevValue + currentValue).toString();
			break;
	}
	operator = '';

	displayUpdate();
}

function appendNumber(num) {
	if (displayValue === '0') {
		displayValue = num;
	} else {
		displayValue += num;
	}

	displayUpdate();
}

displayUpdate();
