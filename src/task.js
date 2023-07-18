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

  ClearCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.iscomplete);
    this.updateTaskIds();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.ShowTask();
  }

  ShowTask() {
    const listcontainer = document.querySelector('.ListContainer');
    listcontainer.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskcontainer = document.createElement('li');
      taskcontainer.classList.add('task');
      taskcontainer.innerHTML = `
    <div class="TaskContainer">
       <input type="checkbox" class="Tcheckbox">
      <div class="TaskTittleContainer">
       <input type="text" name="" class="TaskName" value="${task.description}" data-id="${task.id}" disabled="">
      </div>
    </div>
  <img src="${Delete}" class ="removeBtn" alt="options" data-id="${task.id}">
    `;
      const checkboxb = taskcontainer.querySelector('.Tcheckbox');
      checkboxb.id = `task_${task.id}`;
      listcontainer.appendChild(taskcontainer);
      const btnrevome = taskcontainer.querySelector('.removeBtn');
      btnrevome.addEventListener('click', (event) => {
        event.preventDefault();
        const { id } = event.target.dataset;
        this.DeleteTask(id);
        this.ShowTask();
        for (let i = 0; i < task.length; i + 1) {
          task[i].id = (i + 1);
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
      checkboxb.addEventListener('click', (event) => {
        event.stopPropagation();

        const { id } = task;
        const iscomplete = event.target.checked;
        this.CheckTask(id, iscomplete);
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
        for (let i = 0; i < this.tasks.length; i + 1) {
          this.tasks[i].id = (i + 1);
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
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  CheckTask(id, iscomplete) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks[index].iscomplete = iscomplete;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
export { Tasks };