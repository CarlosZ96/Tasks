export default class Tasks {
  constructor(tasks) {
    this.tasks = tasks;
    this.AddTask = (description) => {
      const task = { description, iscomplete: false, i: 0};
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
    <button class="upload"></button>
      `;
        listcontainer.appendChild(taskcontainer);
      });
    };
  }
}
export { Tasks };