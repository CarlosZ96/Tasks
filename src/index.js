import './style.css'
import { Tasks } from './task.js';

const AddNewTask = document.querySelector('.Add');
const tasks = [];
const taskso = new Tasks(tasks);

AddNewTask.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('TaskInput').value;
  taskso.AddTask(description);
  taskso.ShowTask();
  document.querySelector('.TaskListContainer').reset();
});
