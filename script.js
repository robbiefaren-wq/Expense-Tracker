// Opening and closing a modal window.

const transactionAddBtn = document.querySelector(".transaction__add-button");
const modalDialog = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close-btn");

const form = document.querySelector(".modal__form");
const productInput = document.querySelector("#product");
const sumInput = document.querySelector("#sum");

let transactionType = "income";
const btnIncome = document.querySelector(".modal__btn--income");
const btnExpenses = document.querySelector(".modal__btn--expenses");

transactionAddBtn.addEventListener("click", () => {
  modalDialog.classList.remove("hide");
});

modalCloseBtn.addEventListener("click", () => {
  modalDialog.classList.add("hide");
});

const body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalDialog.classList.add("hide");
  }
});

// Selecting the type of operations.

btnIncome.addEventListener("submit", (e) => {
  e.preventDefault();
  transactionType = "income";
});

btnExpenses.addEventListener("submit", () => {
  e.preventDefault();
  transactionType = "expense";
});

// Handling form submission and reading the entered data.

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = productInput.value;
  const sum = Number(sumInput.value);

  if (product === "" || isNaN(sum) || sum <= 0) {
    alert(
      "‼ Please ensure that correct data has been entered in each field ‼ ",
    );
    return;
  }

  console.log("Product name: ", product);
  console.log("Sum: ", sum);
  console.log("Type: ", transactionType);

  form.reset();
  modalDialog.classList.add("hide");
});
