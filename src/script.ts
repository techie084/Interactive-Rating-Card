"use strict";

///////////////////////////////////////////////////////////////
// Declaring Variables
const btnSubmit = document.querySelector(".btn");
const numbers = document.querySelectorAll(".number");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Selecting numbers
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    num.style.background = "#fb7413";
    num.classList
  });
});

// Function for opening the Modal
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function for Closing the modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//////////////////////////////////////////////////////////////
// Adding Event Listeners
btnSubmit.addEventListener("click", openModal);

// Closing the modal with escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal?.classList.contains(".hidden")) {
    closeModal();
  }
});

if (numbers === ) {
  closeModal();
}

// #fb7413
