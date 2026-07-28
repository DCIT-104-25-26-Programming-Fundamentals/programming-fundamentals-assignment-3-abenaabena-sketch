// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//

const readlineSync = require('readline-sync');

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }
    return a % b;
}

function exponent(a, b) {
    return a ** b;
}

function formatNumber(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

function printMenu() {
    console.log('============================');
    console.log('     SIMPLE CALCULATOR');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}

const operations = {
    '1': ['+', add],
    '2': ['-', subtract],
    '3': ['*', multiply],
    '4': ['/', divide],
    '5': ['%', modulus],
    '6': ['**', exponent],
};

function main() {
    while (true) {
        printMenu();
        const choice = readlineSync.question('Select an operation (1-7): ').trim();

        if (choice === '7') {
            console.log('Goodbye!');
            break;
        }

        if (!(choice in operations)) {
            console.log('Error: Invalid choice. Please select 1-7.');
            continue;
        }

        const a = readlineSync.questionFloat('Enter first number : ');
        const b = readlineSync.questionFloat('Enter second number: ');

        const [symbol, operation] = operations[choice];

        try {
            const result = operation(a, b);
            console.log(
                `Result: ${formatNumber(a)} ${symbol} ${formatNumber(b)} = ${formatNumber(result)}`
            );
        } catch (e) {
            console.log(`Error: ${e.message}`);
        }
    }
}

main();