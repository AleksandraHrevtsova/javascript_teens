import transactionHistory from "./transaction-history.js";

// {
//     id: "dgdiugfugiewurfbhb",
//     amount: "187234",
//     date: "2020-05-11",
//     business: "DDD",
//     name: "",
//     type: "fff",
//     account: "94739587"
// }
const table = document.querySelector(".transaction-table");
const markup = createTableRows(transactionHistory);
table.insertAdjacentHTML("beforeend", markup);

console.log(createTableRowMarkup(transactionHistory[0]));
console.log(createTableRows(transactionHistory));

function createTableRows(transactions) {
  //   return transactions.map((transaction) =>
  //     createTableRowMarkup(transaction).join("")
  //   );

  return transactions.reduce(
    (markup, transaction) => (markup += createTableRowMarkup(transaction)),
    ""
  );
}

function createTableRowMarkup({ type, amount, date, business }) {
  const row = `
    <tr>
        <td>${type}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
    </tr>
    `;
  return row;
}
