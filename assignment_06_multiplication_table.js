// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//

const readlineSync = require('readline-sync');

function printTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 12; i++) {
        const iStr = String(i).padEnd(2, ' ');
        console.log(`${number}  x  ${iStr} =  ${number * i}`);
    }
}

function printTablesUpTo(n) {
    for (let number = 1; number <= n; number++) {
        printTable(number);
        if (number !== n) {
            console.log('-'.repeat(29));
        }
    }
}

function main() {
    const number = readlineSync.questionInt('Enter a number: ');
    printTable(number);

    console.log();
    const n = readlineSync.questionInt('Enter N (for tables 1 to N): ');

    if (n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }
    printTablesUpTo(n);
}

main();