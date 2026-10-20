const celsiusInput = prompt("Enter a temperature in Celsius:");
const celsius = Number.parseFloat(celsiusInput);
const result = document.querySelector("#result");

if (Number.isNaN(celsius)) {
  result.textContent = "Please enter a valid temperature in Celsius.";
}
else {
  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  result.textContent = `${celsius}°C is ${fahrenheit}°F and ${kelvin} K.`;
}