"use strict";
let expression = "";
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML === "=") {
      expression = eval(expression);
      document.querySelector("input").value = expression;
    } else if (e.target.innerHTML === "C") {
      //clear the input field
      expression = "";
      document.querySelector("input").value = expression;
    } else {
      //add it to input field
      expression += e.target.innerHTML;
      document.querySelector("input").value = expression;
      //console.log(typeof e.target.innerHTML);
    }
  });
});
