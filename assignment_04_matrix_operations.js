// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//

const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        let row;
        while (true) {
            const line = readlineSync.question(`Enter row ${i + 1}: `);
            row = line.trim().split(/\s+/).map(Number);
            if (row.length === cols) {
                break;
            }
            console.log(`Expected ${cols} values, please try again.`);
        }
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (const row of matrix) {
        console.log(row.map(v => String(v)).join('  '));
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(a, b) {
    const rows = a.length;
    const cols = a[0].length;
    const result = [];
    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(a[i][j] + b[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function multiplyMatrices(a, b) {
    const rowsA = a.length;
    const colsA = a[0].length;
    const colsB = b[0].length;
    const result = [];
    for (let i = 0; i < rowsA; i++) {
        const newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += a[i][k] * b[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function runTranspose() {
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const cols = readlineSync.questionInt('Enter number of columns: ');
    const matrix = readMatrix(rows, cols);

    console.log('\nOriginal Matrix:');
    printMatrix(matrix);

    console.log('\nTransposed Matrix:');
    printMatrix(transposeMatrix(matrix));
}

function runAddition() {
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const cols = readlineSync.questionInt('Enter number of columns: ');

    console.log('Matrix A:');
    const a = readMatrix(rows, cols);
    console.log('Matrix B:');
    const b = readMatrix(rows, cols);

    console.log('\nSum:');
    printMatrix(addMatrices(a, b));
}

function runMultiplication() {
    const rowsA = readlineSync.questionInt('Enter number of rows for Matrix A: ');
    const colsA = readlineSync.questionInt('Enter number of columns for Matrix A (= rows of B): ');
    const colsB = readlineSync.questionInt('Enter number of columns for Matrix B: ');

    console.log('Matrix A:');
    const a = readMatrix(rowsA, colsA);
    console.log('Matrix B:');
    const b = readMatrix(colsA, colsB);

    console.log('\nProduct A x B:');
    printMatrix(multiplyMatrices(a, b));
}

function main() {
    console.log('Matrix Operations');
    console.log('1. Transpose');
    console.log('2. Add two matrices');
    console.log('3. Multiply two matrices');
    const choice = readlineSync.question('Select an operation (1-3): ').trim();

    if (choice === '1') {
        runTranspose();
    } else if (choice === '2') {
        runAddition();
    } else if (choice === '3') {
        runMultiplication();
    } else {
        console.log('Invalid choice.');
    }
}

main();