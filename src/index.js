import './style.css';
import { Tasks } from './task.js';

const AddNewTask = document.querySelector('.Add');
const tasks = [
  {
    description: 'example1',
    complete: false,
    index: 0
  },
  {
    description: 'example2',
    complete: false,
    index: 0
  },
  {
    description: 'example3',
    complete: false,
    index: 0
  },
  {
    description: 'example4',
    complete: false,
    index: 0
  },
];
const taskso = new Tasks(tasks);
taskso.ShowTask();


