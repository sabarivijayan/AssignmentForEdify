document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
