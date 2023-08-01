let displayValue = '0';
let operator = '';
let prevValue = 0;

function displayUpdate(){
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function clearDisplay(){
  displayValue = '0';
  operator = '';
  prevValue = 0;

  displayUpdate();
}

function appendOperator(op){
  if(operator !== ''){
    calculateResult()
  }
  operator = op;
  prevValue = parseFloat(displayValue);
  
  displayValue = '0';

  displayUpdate();
}

function changeSignal(){
  displayValue = displayValue * -1;
  displayUpdate();
}

function percentage(){
  displayValue = displayValue / 100;
  displayUpdate();
};

function calculateResult(){
  const currentValue = parseFloat(displayValue);
  switch(operator){
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

function appendNumber(num){
  if(displayValue === '0'){
    displayValue = num;
  }else{
    displayValue += num;
  }

  displayUpdate();
}

displayUpdate();