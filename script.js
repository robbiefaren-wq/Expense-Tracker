const transactionAddBtn = document.querySelector(".transaction__add-button");
const modalDialog = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close-btn");
let transactions = [
  {
    id: 1,
    title: "Coffee",
    amount: 5,
    type: "expense",
    date: "21.10.2026",
    category: "Food",
  },
];

const transactionsBody = document.querySelector(".transactions__body");
const transactionsDelteBtn = document.querySelector(
  ".transactions__cell-delte-btn",
);

transactionsBody.innerHTML = "";

const form = document.querySelector(".modal__form");
const productInput = document.querySelector("#product");
const sumInput = document.querySelector("#sum");

let transactionType = "income";
const btnIncome = document.querySelector(".modal__btn--income");
const btnExpenses = document.querySelector(".modal__btn--expenses");

renderTransactions();

// Opening and closing a modal window.

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

btnIncome.addEventListener("click", (e) => {
  e.preventDefault();
  transactionType = "income";
});

btnExpenses.addEventListener("click", (e) => {
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

  let transactionObject = {
    id: Date.now(),
    title: product,
    amount: sum,
    type: transactionType,
    date: "21.10.2026",
    category: "category",
  };

  transactions.push(transactionObject);

  renderTransactions();

  form.reset();
  modalDialog.classList.add("hide");
});

// Creating a table.

function renderTransactions() {
  const resultTransaction = transactions
    .map((transaction) => {
      return `<tr class="transactions__row">
    <td class="transactions__cell">${transaction.date}</td>
    <td class="transactions__cell">${transaction.title}</td>
    <td class="transactions__cell transaction-category transaction-category__icon transaction-category__name">${transaction.category}</td>
    <td class="transactions__cell transactions__cell--${transactionType}">${transaction.amount}</td>
    <td class="transactions__cell">
      <button class="transactions__cell-delete-btn" data-id="${transaction.id }">❌</button>
    </td>
  </tr>`;
    })
    .join("");

  transactionsBody.innerHTML = resultTransaction;
}

  transactionsBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("transactions__cell-delete-btn")) {
      let dataId = Number(e.target.dataset.id);
  
      transactions = transactions.filter(transaction => {
        return transaction.id !== dataId;
      });
    }
    

    renderTransactions();
  });
