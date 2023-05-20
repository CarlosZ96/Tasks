import './style.css';
import { Tasks } from './task.js';

const AddNewTask = document.querySelector('.Add');
const cleart = document.querySelector('.ClearButton');
const taskclass = document.querySelector('.task');
const taskso = new Tasks();
AddNewTask.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('TaskInput').value;
  taskso.AddTask(description);
  taskso.ShowTask();
  document.querySelector('.TaskListContainer').reset();
});

taskso.ShowTask();
taskso.DeleteTaskClick();
cleart.addEventListener('click', (event) => {
  event.preventDefault();
});