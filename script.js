"use strict";
let expression = "";
const buttons = document.querySelectorAll(".btn");

//clear the input field
const clearInput = function () {
  expression = "";
  document.querySelector("input").value = expression;
};

//Evaluate the expression
const evalExpr = function () {
  try {
    expression = eval(expression);
    document.querySelector("input").value = expression;
  } catch (e) {
    //console.log("Invalid Operation");
    clearInput();
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML === "=") {
      evalExpr();
    } else if (e.target.innerHTML === "C") {
      clearInput();
    } else {
      expression += e.target.innerHTML;
      document.querySelector("input").value = expression;
    }
  });
});
