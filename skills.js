//funtion to convert celsius to farenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

//driver code
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);