const operator = document.querySelector("#operation");
const result = document.querySelector(".result");
const operatorButton = document.querySelectorAll(".operator-button");
const resultButton = document.querySelector("#result");
const firstInput = document.querySelector("#firstNumber");
const secondInput = document.querySelector("#secondNumber");

localStorage.clear();
localStorage.setItem("operator", operator.innerText);

operatorButton.forEach((item) =>
  item.addEventListener("click", (e) => {
    operator.innerText = e.target.innerText;
    localStorage.setItem("operator", e.target.innerText);
  })
);

firstInput.addEventListener("keyup", (e) => {
  localStorage.setItem("firstNumber", e.target.value);
  firstInput.blur();
  secondInput.focus();
});

secondInput.addEventListener("keyup", (e) => {
  localStorage.setItem("secondNumber", e.target.value);
  secondInput.blur();
  firstInput.focus();
});

const focusFirstNumber = () => {
  firstInput.value = "";
  firstInput.focus();
};
const focusSecondNumber = () => {
  secondInput.value = "";
  secondInput.focus();
};

resultButton.addEventListener("click", () => {
  const stringFirstNumber = localStorage.getItem("firstNumber");
  const stringSecondNumber = localStorage.getItem("secondNumber");
  const operator = localStorage.getItem("operator");
  const firstNumber = Number(stringFirstNumber);
  const secondNumber = Number(stringSecondNumber);

  if (!stringFirstNumber || Number.isNaN(firstNumber)) {
    firstInput.value = "";
    firstInput.focus();
    result.innerText = "?";
    return;
  }

  if ((!stringSecondNumber, Number.isNaN(secondNumber))) {
    secondInput.value = "";
    secondInput.focus();
    result.innerText = "?";
    return;
  }

  const resultOperation = (resultData) => {
    if (!resultData) {
      result.innerText = "?";
    }
    result.innerText = resultData;
    localStorage.removeItem("firstNumber");
    localStorage.removeItem("second1Number");
    firstInput.value = "";
    secondInput.value = "";
  };

  switch (true) {
    case operator === "+":
      resultOperation(firstNumber + secondNumber);
      break;
    case operator === "-":
      resultOperation(firstNumber - secondNumber);
      break;
    case operator === "*":
      resultOperation(firstNumber * secondNumber);
      break;
    case operator === "/":
      resultOperation(firstNumber / secondNumber);
      break;
  }
});
