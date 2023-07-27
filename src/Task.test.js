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