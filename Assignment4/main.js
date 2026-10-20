const scoreInput = prompt("Enter your assessment score (0-100):");
const score = scoreInput === null
  ? NaN
  : Number.parseFloat(scoreInput.trim().replace(",", "."));
const result = document.querySelector("#result");

if (!Number.isFinite(score) || score < 0 || score > 100) {
  result.textContent = "Please enter a valid score between 0 and 100.";
}
else {
  let grade;

  if (score < 40) {
    grade = 0;
  }
  else if (score < 52) {
    grade = 1;
  }
  else if (score < 64) {
    grade = 2;
  }
  else if (score < 76) {
    grade = 3;
  }
  else if (score < 88) {
    grade = 4;
  }
  else {
    grade = 5;
  }

  result.textContent = `Your grade is ${grade}.`;
}