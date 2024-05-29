# Node.js Command-Line Task Tracker

A command-line task tracker application built with Node.js that allows users to add, list, complete, and remove tasks.

## Features

- **Add a new task**: Prompts the user for a title and description and adds the task.
- **List all tasks**: Displays all the tasks with their details.
- **Mark a task as completed**: Prompts the user for the task ID and marks it as completed.
- **Remove a task**: Prompts the user for the task ID and removes the task.
- **Save and load tasks from a file**: Tasks are saved to and loaded from a `tasks.json` file in the current directory.

## Requirements

- **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Setup

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/task-tracker-node.git
    cd task-tracker-node
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

## Usage

Run the application using Node.js. You can perform various actions by passing the appropriate command-line arguments.

### Add a Task

```sh
node index.js add
