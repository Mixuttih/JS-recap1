const numberInput = prompt("Enter a positive integer:");
const number = numberInput === null
  ? NaN
  : Number.parseInt(numberInput.trim(), 10);
const result = document.querySelector("#result");

if (!Number.isInteger(number) || number <= 0) {
  result.textContent = "Please enter a positive integer.";
}
else {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.border = "1px solid black";

  for (let row = 1; row <= number; row += 1) {
    const tableRow = document.createElement("tr");
    tableRow.style.textAlign = "center";

    for (let column = 1; column <= number; column += 1) {
      const cell = document.createElement("td");
      cell.textContent = row * column;
      cell.style.border = "1px solid black";
      tableRow.append(cell);
    }

    table.append(tableRow);
  }

  result.append(table);
}