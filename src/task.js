import enter from './enter.png';
import Delete from './Freepik.png';

const AddNewTask = document.querySelector('.Add');
AddNewTask.innerHTML = `<img src ="${enter}" class ="upload" alt="enter">`;
export default class Tasks {
  constructor(tasks) {
    this.tasks = tasks;
    this.AddTask = (description) => {
      const task = { description, iscomplete: false, i: tasks.length + 1 };
      tasks.push(task);
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
    <div>
    <button class="removeBtn"><img src="${Delete}" class ="upload" alt="options"></button>    
    </div>
      `;
        listcontainer.appendChild(taskcontainer);
      });
    }; 
  }
}
export { Tasks };