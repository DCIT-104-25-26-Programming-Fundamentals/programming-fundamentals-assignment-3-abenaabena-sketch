// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//

const readlineSync = require('readline-sync');

function generateFibonacci(n) {
    const sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    }
    return sequence;
}

function printFirstNTerms() {
    const n = readlineSync.questionInt('How many terms? ');

    if (n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }

    const sequence = generateFibonacci(n);
    console.log('Fibonacci sequence: ' + sequence.join(' '));
}

function isFibonacciNumber(number) {
    if (number < 0) {
        return false;
    }
    let a = 0, b = 1;
    while (a <= number) {
        if (a === number) {
            return true;
        }
        const next = a + b;
        a = b;
        b = next;
    }
    return false;
}

function checkNumber() {
    const number = readlineSync.questionInt('Enter a number to check: ');

    if (isFibonacciNumber(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

function main() {
    printFirstNTerms();
    checkNumber();
}

main();