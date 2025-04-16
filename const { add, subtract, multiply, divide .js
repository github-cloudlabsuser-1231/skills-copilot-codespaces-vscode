const { add, subtract, multiply, divide } = require('./test.js');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe("Calculator Functions", () => {
    // Test for addition
    test("add() should return the sum of two numbers", () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-2, 3)).toBe(1);
        expect(add(0, 0)).toBe(0);
    });

    // Test for subtraction
    test("subtract() should return the difference of two numbers", () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(3, 5)).toBe(-2);
        expect(subtract(0, 0)).toBe(0);
    });

    // Test for multiplication
    test("multiply() should return the product of two numbers", () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
    });

    // Test for division
    test("divide() should return the quotient of two numbers", () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(5, 2)).toBeCloseTo(2.5);
        expect(divide(0, 5)).toBe(0);
    });

    // Test for division by zero
    test("divide() should return an error message when dividing by zero", () => {
        expect(divide(5, 0)).toBe("Error! Division by zero.");
    });
});