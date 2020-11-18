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

function displaySelection(e) {
  let value = e.target.value;
  console.log(value);
  let operation = document.querySelector(".operation");
  operation.textContent += value;
}

let numberSelection = Array.from(document.querySelectorAll(".number"));
numberSelection.forEach((obj) => {
  obj.addEventListener("click", displaySelection);
});

let operatorSelection = Array.from(document.querySelectorAll(".operator"));
operatorSelection.forEach((obj) => {
  obj.addEventListener("click", displaySelection);
});

// function onClickEvent(e) {
//   return e.target.value;
// }
