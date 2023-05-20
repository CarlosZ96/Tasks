import enter from './enter.png';
import Delete from './Freepik.png';

const AddNewTask = document.querySelector('.Add');
AddNewTask.innerHTML = `<img src ="${enter}" class ="upload" alt="enter">`;
export default class Tasks {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }
  AddTask(description) {
    const task = { description, iscomplete: false, id: this.tasks.length + 1 };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  DeleteTask(id) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  ShowTask() {
    const listcontainer = document.querySelector('.ListContainer');
    listcontainer.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskcontainer = document.createElement('li');
      taskcontainer.classList.add('task');
      taskcontainer.innerHTML = `
  <div class="TaskTittleContainer">
      <input type="checkbox">
      <input type="text" name="" class="TaskName" value="${task.description}" data-id="${task.id}" disabled="">
  </div>
  <img src="${Delete}" class ="removeBtn" alt="options" data-id="${task.id}">
    `;
      listcontainer.appendChild(taskcontainer);
      const btnrevome = taskcontainer.querySelector('.removeBtn');
      btnrevome.addEventListener('click', (event) => {
        event.preventDefault();
        const { id } = event.target.dataset;
        this.DeleteTask(id);
        this.ShowTask();
      });
      const TaskContainer = document.querySelector('.TaskTittleContainer');
      TaskContainer.addEventListener('click', (event) => {
        event.preventDefault();
        const { id } = event.target.dataset;
        const taskso = new Tasks();
        taskso.EditTask(id);
        const InputDescription = document.querySelector('.TaskName');
        InputDescription.disabled = false;
      });
      TaskContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          const InputDescription = document.querySelector('.TaskName');
          InputDescription.disabled = true;
        }
      });
    });
  };
  DeleteTaskClick() {
    const listcontainer = document.querySelector('.ListContainer');
    listcontainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('button_remove')) {
        const { id } = event.target.dataset;
        this.DeleteTask(id);
        this.ShowTask();
      }
    })
  }
  EditTask(id) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      const newDescription = document.getElementById('TaskInput').value;
      this.tasks[index].description = newDescription;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
export { Tasks };