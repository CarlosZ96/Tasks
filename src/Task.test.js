import { Tasks } from './task.js';

describe('Tasks', () => {
  let taskso;

  beforeEach(() => {
    taskso = new Tasks();
    taskso.tasks = []; // Ensure tasks array is empty before each test
  });

  describe('AddTask(description)', () => {
    it('should add a new task with the given description', () => {
      const description = 'Buy groceries';
      taskso.AddTask(description);

      // Check if the task was added correctly
      expect(taskso.tasks).toHaveLength(1);
      expect(taskso.tasks[0].description).toBe(description);
      expect(taskso.tasks[0].iscomplete).toBeFalsy(); // New tasks are not completed
    });

    // Add more test cases for different scenarios, if needed
  });

  describe('DeleteTask(id)', () => {
    it('should delete the task with the given id', () => {
      // Add some tasks to the tasks array
      taskso.tasks.push(
        { id: 1, description: 'Task 1', iscomplete: false },
        { id: 2, description: 'Task 2', iscomplete: true },
        { id: 3, description: 'Task 3', iscomplete: false }
      );

      const taskIdToDelete = 2;
      taskso.DeleteTask(taskIdToDelete);

      // Check if the task was deleted correctly
      expect(taskso.tasks).toHaveLength(2);
      expect(taskso.tasks.some(task => task.id === taskIdToDelete)).toBeFalsy();
    });

    // Add more test cases for different scenarios, if needed
  });
});