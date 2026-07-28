// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
//

const readlineSync = require('readline-sync');

let tasks = [];

function addTask() {
    const task = readlineSync.question('Enter task: ');
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log('Your to-do list is empty!');
        return;
    }
    console.log('Your Tasks:');
    tasks.forEach((task, i) => {
        console.log(`${i + 1}. ${task}`);
    });
}

function deleteTask() {
    if (tasks.length === 0) {
        console.log('Your to-do list is empty!');
        return;
    }
    viewTasks();
    const number = readlineSync.questionInt('Enter task number to delete: ');

    if (number < 1 || number > tasks.length) {
        console.log('Error: Invalid task number.');
        return;
    }
    const removed = tasks[number - 1];
    tasks.splice(number - 1, 1);
    console.log(`Task "${removed}" has been removed.`);
}

function printMenu() {
    console.log('============================');
    console.log('     TO-DO LIST MENU');
    console.log('============================');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Delete task');
    console.log('4. Quit');
}

function main() {
    while (true) {
        printMenu();
        const choice = readlineSync.question('Enter your choice (1-4): ').trim();

        if (choice === '1') {
            addTask();
        } else if (choice === '2') {
            viewTasks();
        } else if (choice === '3') {
            deleteTask();
        } else if (choice === '4') {
            console.log('Goodbye!');
            break;
        } else {
            console.log('Error: Invalid choice. Please select 1-4.');
        }
    }
}

main();