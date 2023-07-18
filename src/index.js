import './style.css';
import { Tasks } from './task.js';

const AddNewTask = document.querySelector('.Add');
const cleart = document.querySelector('.ClearButton');
const taskso = new Tasks();
AddNewTask.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('TaskInput').value;
  taskso.AddTask(description);
  taskso.ShowTask();
  document.querySelector('.TaskListContainer').reset();
  event.preventDefault();
});

const description = document.getElementById('TaskInput');

description.addEventListener('keydown', (event) => {
  const description = document.getElementById('TaskInput').value;
  if (event.key === 'Enter') {
    event.preventDefault();
    taskso.AddTask(description);
    taskso.ShowTask();
    document.querySelector('.TaskListContainer').reset();
  }
});

const clearButton = document.querySelector('.ClearButton');
clearButton.addEventListener('click', () => {
  taskso.ClearCompletedTasks();
});

taskso.ShowTask();
taskso.DeleteTaskClick();
cleart.addEventListener('click', (event) => {
  event.preventDefault();
});