import './style.css'
let task = [];

const listcontainer = document.querySelector('.ListContainer');
const AddNewTask = document.querySelector('.Add');
let i = 0;

AddNewTask.addEventListener('click', (event) => {
  event.preventDefault();
  const taskinput = document.getElementById('TaskInput').value;
  let iscomplete = false;
  const newtask = {taskinput, iscomplete, i};
  task.push(newtask);
  const taskcontainer = document.createElement('li');
  taskcontainer.className = 'task';  
  listcontainer.append(taskcontainer);
  taskcontainer.innerHTML=`
<div class="TaskTittleContainer">
  <input type="checkbox">
  <h3 class="TaskName"</h3>
</div>
<button class="upload"></button>
  `;
  const TaskName = document.querySelector('.TaskName');
  TaskName.textContent = task[i].taskinput; 
  console.log(task); 
  task[i].i = i;
  i += 1;        
});

