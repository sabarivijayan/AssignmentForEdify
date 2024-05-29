const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const inquirer = require('inquirer');
const chalk = require('chalk');

const taskFilePath = path.join(__dirname, 'tasks.json');

let tasks = [];

function main() {
    loadTasks();

    const args = process.argv.slice(2);
    const action = args[0];
    switch (action) {
        case 'add':
            addTask();
            break;
        case 'list':
            listTasks();
            break;
        case 'complete':
            completeTask();
            break;
        case 'remove':
            removeTask();
            break;
        default:
            console.log(chalk.red('Invalid action. Use add, list, complete, or remove.'));
            break;
    }

    saveTasks();
}

function addTask() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the task:',
            validate: function (value) {
                if (value.trim().length === 0) {
                    return 'Please enter a title for the task.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of the task:'
        }
    ]).then(answers => {
        const newTask = {
            id: uuidv4(),
            title: answers.title,
            description: answers.description,
            status: 'incomplete',
            createdAt: new Date().toISOString()
        };
        tasks.push(newTask);
        console.log(chalk.green('Task added successfully!'));
    });
}

function listTasks() {
    if (tasks.length === 0) {
        console.log(chalk.yellow('No tasks found.'));
        return;
    }
    tasks.forEach(task => {
        console.log(chalk.blue(`ID: ${task.id}`));
        console.log(`Title: ${task.title}`);
        console.log(`Description: ${task.description}`);
        console.log(`Status: ${task.status}`);
        console.log(`Created At: ${task.createdAt}`);
        console.log();
    });
}

function completeTask() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter the ID of the task to mark as completed:',
            validate: function (value) {
                if (!value.trim()) {
                    return 'Please enter the ID of the task to mark as completed.';
                }
                return true;
            }
        }
    ]).then(answer => {
        const taskId = answer.id.trim();
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1) {
            console.log(chalk.red('Task not found.'));
        } else {
            tasks[taskIndex].status = 'complete';
            console.log(chalk.green('Task marked as completed.'));
        }
    });
}

function removeTask() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter the ID of the task to remove:',
            validate: function (value) {
                if (!value.trim()) {
                    return 'Please enter the ID of the task to remove.';
                }
                return true;
            }
        }
    ]).then(answer => {
        const taskId = answer.id.trim();
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1) {
            console.log(chalk.red('Task not found.'));
        } else {
            tasks.splice(taskIndex, 1);
            console.log(chalk.green('Task removed successfully.'));
        }
    });
}

function saveTasks() {
    const tasksJson = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(taskFilePath, tasksJson);
}

function loadTasks() {
    try {
        const data = fs.readFileSync(taskFilePath, 'utf8');
        tasks = JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            tasks = [];
        } else {
            console.error(chalk.red(`Error loading tasks: ${error.message}`));
        }
    }
}

main();
