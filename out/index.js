"use strict";
exports.__esModule = true;
exports.screen = void 0;
var button = document.querySelector(".button");
var firstInput = document.querySelector("#first-input");
var secondInput = document.querySelector("#second-input");
exports.screen = document.querySelector(".screen");
var addNumbers = function (a, b) {
    exports.screen.innerHTML = (a + b).toString();
};
button.addEventListener("click", function () {
    return addNumbers(parseFloat(firstInput.value), parseFloat(secondInput.value));
});
