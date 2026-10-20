const firstPoint = prompt("Enter the first point as x,y:");
const secondPoint = prompt("Enter the second point as x,y:");

const parsePoint = (point) => {
  if (!point) {
    return [NaN, NaN];
  }

  const coordinates = point.split(",").map((coordinate) => coordinate.trim());

  if (coordinates.length !== 2 || coordinates.some((coordinate) => coordinate === "")) {
    return [NaN, NaN];
  }

  const numbers = coordinates.map(Number);
  return numbers.every(Number.isFinite) ? numbers : [NaN, NaN];
};

const [x1, y1] = parsePoint(firstPoint);
const [x2, y2] = parsePoint(secondPoint);
const result = document.querySelector("#result");

if ([x1, y1, x2, y2].some(Number.isNaN)) {
  result.textContent = "Please enter valid coordinates for both points.";
}
else {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  result.textContent = `The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance}.`;
}