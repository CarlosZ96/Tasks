import { Tasks } from './task.js';
describe('Tasks class', () => {
  let tasks;
  beforeEach(() => {
    // Create a new Tasks instance before each test case to start with a clean state
    tasks = new Tasks();
    // Clear local storage before each test case
    localStorage.clear();
  });
  // Test the AddTask(description) method
  describe('AddTask', () => {
    test('should add a new task to the tasks list', () => {
      tasks.AddTask('Task 1');
      tasks.AddTask('Task 2');
      // Retrieve the tasks from local storage and check if they were added correctly
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      expect(storedTasks).toHaveLength(2);
      expect(storedTasks[0].description).toBe('Task 1');
      expect(storedTasks[1].description).toBe('Task 2');
    });
  })
});