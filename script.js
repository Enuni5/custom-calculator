let a = 0;
let b = 0;
let operator;
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}
function percentage(a, b) {
  return (a / 100) * b;
}

function operate(operator, a, b) {
  switch (operator) {
    case add:
      add(a, b);
      break;
    case subtract:
      subtract(a, b);
      break;
    case divide:
      divide(a, b);
      break;
    case multiply:
      multiply(a, b);
      break;
    case percentage:
      percentage(a, b);
      break;
  }
}
//Selección de cifras por el usuario
let numberArray = Array.from(document.querySelectorAll(".number"));
let numberSelection = numberArray.forEach((obj) => {
  obj.addEventListener("click", (e) => {
    return e.target.value;
  });
});

//Selección de operador por el usuario
let operatorArray = Array.from(document.querySelectorAll(".operator"));
let operatorSelection = operatorArray.forEach((obj) => {
  obj.addEventListener("click", (e) => {
    return e.target.value;
  });
});

function displaySelection(numberSelection, operatorSelection) {
  let operation = document.querySelector(".operation");
  operation.textContent += value;
}

// function onClickEvent(e) {
//   return e.target.value;
// }
