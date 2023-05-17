import './style.css'
const task = [
  {
    description: '',
    completed: false,
    index: 0
  }
];

const listcontainer = document.querySelector('.ListContainer');
const AddNewTask = document.querySelector('.Add');



AddNewTask.addEventListener('click', (event) => {
  event.preventDefault();
  const taskinput = document.getElementById('TaskInput').value;
  let i = 0;
  task[i].index = (i += 1);
  task[i].description = taskinput;
  const taskcontainer = document.createElement('li');
  taskcontainer.className = 'task';  
  listcontainer.append(taskcontainer);
  taskcontainer.innerHTML=`
<div class="TaskTittleContainer">
  <input type="checkbox">
  <h3 class="TaskName" id=task${i}></h3>
</div>
<button class="upload"></button>
  `;
  const TaskName = document.querySelector('.TaskName');
  TaskName.textContent = speakersdata[i].description; 
  i += 1;               
});

