import { Tasks } from './task.js';

describe('Tasks', () => {
  let listContainerMock;
  beforeEach(() => {
    localStorage.clear();
    listContainerMock = document.createElement('div');
    listContainerMock.classList.add('ListContainer');
    document.body.appendChild(listContainerMock);
  });
  describe('AddTask', () => {
    it('should add a new task to the list', () => {
      const taskso = new Tasks();
      taskso.AddTask('Task 1');
      taskso.AddTask('Task 2');
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      expect(tasks).toHaveLength(2);
      expect(tasks[0].description).toBe('Task 1');
      expect(tasks[1].description).toBe('Task 2');
    });
  });
  describe('DeleteTask', () => {
    it('should delete the task with the specified id', () => {
      const taskso = new Tasks();
      taskso.AddTask('Task 1');
      taskso.AddTask('Task 2');
      taskso.AddTask('Task 3');
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      taskso.DeleteTask(2);
      tasks = JSON.parse(localStorage.getItem('tasks'));
      expect(tasks).toHaveLength(2);
      expect(tasks.map((task) => task.description)).toEqual(['Task 1', 'Task 3']);
    });
    it('should not delete anything if the id does not exist', () => {
      const taskso = new Tasks();
      taskso.AddTask('Task 1');
      taskso.AddTask('Task 2');
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      taskso.DeleteTask(10);
      tasks = JSON.parse(localStorage.getItem('tasks'));
      expect(tasks).toHaveLength(2);
      expect(tasks.map((task) => task.description)).toEqual(['Task 1', 'Task 2']);
    });
  });
  describe('EditTask', () => {
    it('should update the description of the task with the specified id', () => {
      const taskso = new Tasks();
      taskso.AddTask('Task 1');
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      taskso.EditTask(1, 'Updated Task');
      tasks = JSON.parse(localStorage.getItem('tasks'));
      expect(tasks[0].description).toBe('Updated Task');
    });
    it('should not update anything if the id does not exist', () => {
      const taskso = new Tasks();
      taskso.AddTask('Task 1');
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      taskso.EditTask(10, 'Updated Task');
      tasks = JSON.parse(localStorage.getItem('tasks'));
      expect(tasks[0].description).toBe('Task 1');
    });
  });
  describe('CheckTask', () => {
    it('should update the iscomplete status of the task with the specified id', () => {
      const taskso = new Tasks();
      taskso.AddTask('Task 1');
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      taskso.CheckTask(1, true);
      tasks = JSON.parse(localStorage.getItem('tasks'));
      expect(tasks[0].iscomplete).toBe(true);
    });
    it('should not update anything if the id does not exist', () => {
      const taskso = new Tasks();
      taskso.AddTask('Task 1');
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      taskso.CheckTask(10, true);
      tasks = JSON.parse(localStorage.getItem('tasks'));
      expect(tasks[0].iscomplete).toBe(false);
    });
  });
});