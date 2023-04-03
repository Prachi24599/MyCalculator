"use strict";
const add = document.querySelector(".addition");
const sub = document.querySelector(".substraction");
const mult = document.querySelector(".multiplication");
const div = document.querySelector(".division");
const buttons = document.querySelectorAll(".btn");
const displayField = document.querySelector(".input");

const one = document.querySelector(".one");
// one.addEventListener("click", function () {
//   //add it to input
//   displayField.value = one.textContent;
// });

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    //add it to input
    displayField.value = btn.textContent;
  });
});
