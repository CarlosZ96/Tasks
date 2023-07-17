import enter from './enter.png';
import Delete from './Freepik.png';

const AddNewTask = document.querySelector('.Add');
const InputDescription = document.querySelector('.task');
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
        for (let i = 0; i < task.length; i++) {
          task[i].id=(i+1);
        }
      });
      const TaskTittleContainer = taskcontainer.querySelector('.TaskTittleContainer');
      TaskTittleContainer.addEventListener('click', (event) => {
        event.preventDefault();
        const InputDescriptionr = taskcontainer.querySelector('.TaskName');
        InputDescriptionr.disabled = false;
        const { id } = event.target.dataset;
        this.EditTask(id);
      });
      TaskTittleContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          const InputDescription = taskcontainer.querySelector('.TaskName');
          const newDescription = taskcontainer.querySelector('.TaskName').value;
          InputDescription.disabled = true;
          const { id } = event.target.dataset;
          this.EditTask(id, newDescription);
        }    
      });
    });
  }

  DeleteTaskClick() {
    const listcontainer = document.querySelector('.ListContainer');
    listcontainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('button_remove')) {
        const { id } = event.target.dataset;
        this.DeleteTask(id);
        this.ShowTask();
        this.updateTaskIds();
        for (let i = 0; i < this.tasks.length; i++) {
          this.tasks[i].id = (i+1);
        }
      }
    });
  }

  updateTaskIds() {
    this.tasks = this.tasks.map((task, index) => ({
      ...task,
      id: index + 1,
    }));
  }

  EditTask(id, newDescription) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks[index].description = newDescription;
      console.log(newDescription);
      for (let i = 0; i < this.tasks.length; i++) {
        console.log('Task:'+this.tasks[i].id);
      }
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
export { Tasks };