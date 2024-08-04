// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        const taskDateValue = taskDate.value;

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        const taskContent = document.createElement('span');
        taskContent.textContent = `${taskText} (Due: ${taskDateValue})`;
        taskItem.appendChild(taskContent);

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const completeButton = document.createElement('button');
        completeButton.className = 'complete-button';
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        actions.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskContent.textContent = `${newTaskText} (Due: ${taskDateValue})`;
            }
        });
        actions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        actions.appendChild(deleteButton);

        taskItem.appendChild(actions);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskDate.value = '';
    }

    addTaskButton.addEventListener('click', addTask);
});
