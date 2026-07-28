// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//

const readlineSync = require('readline-sync');

let students = [];

function averageOf(scores) {
    let total = 0;
    for (const s of scores) {
        total += s;
    }
    return total / scores.length;
}

function addStudent() {
    const name = readlineSync.question('Student name: ');
    const id = readlineSync.questionInt('Student ID: ');
    const numScores = readlineSync.questionInt('How many scores? ');

    const scores = [];
    for (let i = 1; i <= numScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i}: `);
        scores.push(score);
    }

    students.push({ name, id, scores });
    console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents() {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }

    console.log('-'.repeat(50));
    console.log(
        'Name'.padEnd(15) + 'ID'.padEnd(12) + 'Scores'.padEnd(15) + 'Average'
    );
    console.log('-'.repeat(50));

    for (const student of students) {
        const scoresStr = student.scores.join(', ');
        const avg = averageOf(student.scores).toFixed(2);
        console.log(
            student.name.padEnd(15) +
            String(student.id).padEnd(12) +
            scoresStr.padEnd(15) +
            avg
        );
    }
    console.log('-'.repeat(50));
}

function calculateAverageForId() {
    const id = readlineSync.questionInt('Enter student ID: ');

    const student = students.find(s => s.id === id);
    if (student) {
        const avg = averageOf(student.scores).toFixed(2);
        console.log(`${student.name}'s average score: ${avg}`);
    } else {
        console.log('Error: Student ID not found.');
    }
}

function printMenu() {
    console.log('================================');
    console.log('   STUDENT RECORD SYSTEM MENU');
    console.log('================================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');
}

function main() {
    while (true) {
        printMenu();
        const choice = readlineSync.question('Enter your choice (1-4): ').trim();

        if (choice === '1') {
            addStudent();
        } else if (choice === '2') {
            displayAllStudents();
        } else if (choice === '3') {
            calculateAverageForId();
        } else if (choice === '4') {
            console.log('Goodbye!');
            break;
        } else {
            console.log('Error: Invalid choice. Please select 1-4.');
        }
    }
}

main();