import './style.css';
import { Tasks } from './task.js';

const AddNewTask = document.querySelector('.Add');
const cleart = document.querySelector('.ClearButton');
const listcontainer = document.querySelector('.ListContainer');
const tasks = [];
const taskso = new Tasks(tasks);
AddNewTask.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('TaskInput').value;
  taskso.AddTask(description);
  taskso.ShowTask();
  document.querySelector('.TaskListContainer').reset();
  const btnrevome = document.querySelector('.removeBtn');
  btnrevome.addEventListener('click', (event) => {
      event.preventDefault();
      const { index } = event.target.dataset;
      tasks.splice(index, 1);
      console.log(index);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskso.ShowTask();
  });
});

cleart.addEventListener('click', (event) => {
  event.preventDefault();
});