// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//

const readlineSync = require('readline-sync');

function calculateSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}

function calculateMax(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function calculateMin(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

function main() {
    const n = readlineSync.questionInt('How many numbers? ');

    if (n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }

    const numbers = [];
    for (let i = 1; i <= n; i++) {
        const value = readlineSync.questionFloat(`Enter number ${i}: `);
        numbers.push(value);
    }

    console.log('\nResults:');
    console.log(`Sum:     ${calculateSum(numbers)}`);
    console.log(`Average: ${calculateAverage(numbers)}`);
    console.log(`Maximum: ${calculateMax(numbers)}`);
    console.log(`Minimum: ${calculateMin(numbers)}`);
}

main();