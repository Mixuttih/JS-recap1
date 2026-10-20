const numberInput = prompt("Enter a positive integer:");
const number = numberInput === null
  ? NaN
  : Number.parseInt(numberInput.trim(), 10);
const result = document.querySelector("#result");

if (!Number.isInteger(number) || number <= 0) {
  result.textContent = "Please enter a positive integer.";
}
else {
  let sum = 0;

  for (let current = 1; current <= number; current += 1) {
    sum += current;
  }

  result.textContent = `The sum of the natural numbers from 1 to ${number} is ${sum}.`;
}