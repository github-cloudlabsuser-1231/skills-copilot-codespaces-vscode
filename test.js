// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

// Main calculator function
function calculator() {
    console.log("Welcome to the Calculator!");
    console.log("Options:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Quit");

    const prompt = require('prompt-sync')(); // Import prompt-sync for user input

    while (true) {
        const choice = prompt("Enter your choice (1/2/3/4/5): ");

        if (choice === "5") {
            console.log("Thanks for using the calculator. Goodbye!");
            break;
        }

        const num1 = parseFloat(prompt("Enter the first number: "));
        const num2 = parseFloat(prompt("Enter the second number: "));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter valid numbers.");
            continue;
        }

        switch (choice) {
            case "1":
                console.log(`Result: ${add(num1, num2)}`);
                break;
            case "2":
                console.log(`Result: ${subtract(num1, num2)}`);
                break;
            case "3":
                console.log(`Result: ${multiply(num1, num2)}`);
                break;
            case "4":
                console.log(`Result: ${divide(num1, num2)}`);
                break;
            default:
                console.log("Invalid choice. Please select a valid option.");
        }
    }
}

// Run the calculator
calculator();