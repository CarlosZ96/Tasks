import options from './options.png';
import enter from './enter.png';

const AddNewTask = document.querySelector('.Add');
AddNewTask.innerHTML = `<img src ="${enter}" class ="upload" alt="enter">`;
export default class Tasks {
  constructor(tasks) {
    this.tasks = tasks;
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
    <button class="upload"><img src="${options}" class ="upload" alt="options"></button>
      `;
        listcontainer.appendChild(taskcontainer);
      });
    };
  }
}
export { Tasks };