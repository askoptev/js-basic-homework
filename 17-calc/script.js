const operator = document.querySelector('#operation');
const operatorButton = document.querySelector('.operatorButton');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divisionButton = document.querySelector('#division');
const resultButton = document.querySelector('#result');
const firstInput = document.querySelector('#firstNumber');
const secondInput = document.querySelector('#secondNumber');

console.log(operatorButton);

operatorButton.addEventListener("click", (e) => {
  console.log('operatorButton');
  
  operator.innerText = e.innerText;
})
