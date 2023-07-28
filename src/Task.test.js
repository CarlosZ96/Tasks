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
  describe('ClearCompletedTasks', () => {
    it('should remove all completed tasks from the list', () => {
      const taskso = new Tasks();

      // Add some tasks to the list, with one completed
      taskso.AddTask('Task 1');
      taskso.AddTask('Task 2');
      taskso.AddTask('Task 3');
      taskso.CheckTask(1, true); // Mark Task 1 as completed

      // Run ClearCompletedTasks() to remove completed tasks
      taskso.ClearCompletedTasks();
      const tasks = JSON.parse(localStorage.getItem('tasks'));

      // Ensure that completed Task 1 is removed, and the other tasks remain
      expect(tasks).toHaveLength(2);
      expect(tasks.map(task => task.description)).toEqual(['Task 2', 'Task 3']);
    });

    it('should not remove any tasks if no tasks are completed', () => {
      const taskso = new Tasks();

      // Add some tasks to the list, none completed
      taskso.AddTask('Task 1');
      taskso.AddTask('Task 2');

      // Run ClearCompletedTasks() when no tasks are completed
      taskso.ClearCompletedTasks();
      const tasks = JSON.parse(localStorage.getItem('tasks'));

      // Ensure that all tasks remain unchanged
      expect(tasks).toHaveLength(2);
      expect(tasks.map(task => task.description)).toEqual(['Task 1', 'Task 2']);
    });

    it('should not remove any tasks if the list is empty', () => {
      const taskso = new Tasks();

      // Run ClearCompletedTasks() when the list is empty
      taskso.ClearCompletedTasks();
      const tasks = JSON.parse(localStorage.getItem('tasks'));

      // Ensure that the list remains empty
      expect(tasks).toHaveLength(0);
    });
  });

  // Cleanup after all tests
  afterAll(() => {
    // Remove the list container element mock from the DOM
    document.body.removeChild(listContainerMock);
  });
});