// Always use strict mode
"use strict";
///////////////////////////////////////////////////////////////
// Declaring Variables
const btnSubmit = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const numbersBtn = document.querySelectorAll(".number");
const overlay = document.querySelector(".overlay");
const selected = document.querySelector(".selected");
const btnCloseModal = document.querySelector(".close-modal");
const cardContainer = document.querySelector(".card-container");
const errorMsg = document.querySelector(".error-msg");
let buttonText = "";
// Style the Selected number
numbersBtn.forEach((number) => {
    number.addEventListener("click", () => {
        errorMsg?.classList.add("hidden");
        number.classList.add("active");
        buttonText = number.textContent;
    });
});
// Function for opening the Modal
btnSubmit?.addEventListener("click", () => {
    if (buttonText) {
        selected.textContent = buttonText;
        modal?.classList.remove("hidden");
        overlay?.classList.remove("hidden");
    }
    else {
        errorMsg?.classList.remove("hidden");
    }
});
// Function for Closing the modal
const closeModal = () => {
    modal?.classList.add("hidden");
    overlay?.classList.add("hidden");
    numbersBtn.forEach((numberBtn) => {
        numberBtn.classList.remove("active");
    });
};
btnCloseModal?.addEventListener("click", () => {
    closeModal();
});
// Closing the modal with escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal?.classList.contains("hidden")) {
        closeModal();
    }
});
