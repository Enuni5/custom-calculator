let firstOperand = "";
let secondOperand = "";
let operator = "";
let opResult = "0";

displayResult();

//Selección de cifras por el usuario
let numberArray = Array.from(document.querySelectorAll(".number"));
let numberSelection = numberArray.forEach((obj) => {
  obj.addEventListener("click", (e) => {
    if ((firstOperand + secondOperand + operator).length > 38) {
      return;
    }
    if (opResult != 0 && e.target.className == "number") {
      clearDisplay();
    }
    if (firstOperand != "" && operator != "") {
      if (!secondOperand.includes(".")) {
        secondOperand += e.target.value;
      } else if (e.target.value == ".") {
        return;
      } else secondOperand += e.target.value;
      displaySelection();
      return secondOperand;
    } else if (firstOperand == "" || operator == "") {
      if (!firstOperand.includes(".")) {
        firstOperand += e.target.value;
      } else if (e.target.value == ".") {
        return;
      } else firstOperand += e.target.value;
      displaySelection();
      return firstOperand;
    }
  });
});

//Selección de operador por el usuario
let operatorArray = Array.from(document.querySelectorAll(".operator"));
let operatorSelection = operatorArray.forEach((obj) => {
  obj.addEventListener("click", (e) => {
    if (opResult != "" && opResult != 0) {
      firstOperand = opResult.toString();
      secondOperand = "";
      operator = e.target.value;
    } else {
      operator = e.target.value;
    }
    displaySelection();
    opResult = 0;
    return operator, firstOperand, secondOperand;
  });
});

//Llamada al botón igual -> resuelve operación
let equalsPressed = document.querySelector(".equals");
let equalsFunction = equalsPressed.addEventListener("click", () => {
  operate(operator, firstOperand, secondOperand);
  displayResult();
});

// Llamada para borrar todas las operaciones y números introducidos
let allClear = document.getElementById("clear");
let clearing = allClear.addEventListener("click", clearDisplay);

let changeSign = document
  .getElementById("change-sign")
  .addEventListener("click", () => {
    let resultMy = opResult;
    if (
      firstOperand == "" &&
      secondOperand == "" &&
      operator == "" &&
      opResult == 0
    ) {
      return;
    } else if (opResult != 0) {
      clearDisplay();
      firstOperand = (+resultMy * -1).toString();
      displaySelection();
    } else if (firstOperand != "" && operator == "") {
      firstOperand = (+firstOperand * -1).toString();
      displaySelection();
    } else if (operator != "" && secondOperand != "") {
      secondOperand = (+secondOperand * -1).toString();
      displaySelection();
    }
  });

//Muestra la operacion en el display
function displaySelection() {
  let operationDisplay = `${firstOperand} ${operator} ${secondOperand}`;
  let operation = document.querySelector(".operation");
  operation.textContent = operationDisplay;
}

//Muestra el resultado en el display
function displayResult() {
  let result = document.querySelector(".result");
  result.textContent = opResult.toLocaleString();
}

// Borra el display
function clearDisplay() {
  firstOperand = "";
  secondOperand = "";
  operator = "";
  opResult = "0";
  displaySelection();
  displayResult();
}

// Función para operar
function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case "+":
      opResult = +firstOperand + +secondOperand;
      break;
    case "-":
      opResult = +firstOperand - +secondOperand;
      break;
    case "/":
      opResult = +firstOperand / +secondOperand;
      break;
    case "*":
      opResult = +firstOperand * +secondOperand;
      break;
    case "%":
      opResult = +firstOperand / 100;
      break;
  }
}
