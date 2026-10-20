const sideAInput = prompt("Enter the length of side A:");
const sideBInput = prompt("Enter the length of side B:");
const sideCInput = prompt("Enter the length of side C:");
const sides = [sideAInput, sideBInput, sideCInput].map((side) =>
  side === null || side.trim() === ""
    ? NaN
    : Number.parseFloat(side.trim().replace(",", "."))
);
const [sideA, sideB, sideC] = sides;
const result = document.querySelector("#result");

const validSides = sides.every(Number.isFinite) && sides.every((side) => side > 0);
const validTriangle =
  validSides &&
  sideA + sideB > sideC &&
  sideA + sideC > sideB &&
  sideB + sideC > sideA;

if (!validSides || !validTriangle) {
  result.textContent = "Please enter three positive side lengths that form a valid triangle.";
}
else if (sideA === sideB && sideB === sideC) {
  result.textContent = "The triangle is equilateral.";
}
else if (sideA === sideB || sideA === sideC || sideB === sideC) {
  result.textContent = "The triangle is isosceles.";
}
else {
  result.textContent = "The triangle is scalene.";
}