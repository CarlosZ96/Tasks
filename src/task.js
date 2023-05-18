import options from './options.png';
import enter from './enter.png';

const AddNewTask = document.querySelector('.Add');
AddNewTask.innerHTML = `<img src ="${enter}" class ="upload" alt="enter">`;
export default class Tasks {
  constructor(tasks) {
    this.tasks = tasks;
    this.AddTask = (description) => {
      const task = { description, iscomplete: false, i: 0 };
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    };
    this.ShowTask = () => {
      const listcontainer = document.querySelector('.ListContainer');
      listcontainer.innerHTML = '';
      this.tasks.forEach((task) => {
        const taskcontainer = document.createElement('li');
        taskcontainer.classList.add('task');
        taskcontainer.innerHTML = `
    <div class="TaskTittleContainer">
        <input type="checkbox">
        <h3 class="TaskName">${task.description}</h3>
    </div>
    <div></div>
    <button class="upload"><img src="${options}" class ="upload" alt="options"></button>
      `;
        listcontainer.appendChild(taskcontainer);
      });
    };
  }
}
export { Tasks };