"use strict";
///////////////////////////////////////////////////////////////
// Declaring Variables
var btnSubmit = document.querySelector(".btn");
var numbers = document.querySelectorAll(".number");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
// Selecting numbers
numbers.forEach(function (num) {
    num.addEventListener("click", function () {
        num.style.background = "#fb7413";
        num.classList;
    });
});
// Function for opening the Modal
var openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
// Function for Closing the modal
var closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
//////////////////////////////////////////////////////////////
// Adding Event Listeners
btnSubmit.addEventListener("click", openModal);
// Closing the modal with escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !(modal === null || modal === void 0 ? void 0 : modal.classList.contains(".hidden"))) {
        closeModal();
    }
});
if (numbers === ) {
    closeModal();
}
