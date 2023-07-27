import { Tasks } from './task.js';

describe('Tasks', () => {
  let taskso;
  beforeEach(() => {
    taskso = new Tasks();
    taskso.tasks = [];
  });
  describe('AddTask(description)', () => {
    it('should add a new task with the given description', () => {
      const description = 'Buy groceries';
      taskso.AddTask(description);
      expect(taskso.tasks).toHaveLength(1);
      expect(taskso.tasks[0].description).toBe(description);
      expect(taskso.tasks[0].iscomplete).toBeFalsy();
    });
  });
  describe('DeleteTask(id)', () => {
    it('should delete the task with the given id', () => {
      taskso.tasks.push(
        { id: 1, description: 'Task 1', iscomplete: false },
        { id: 2, description: 'Task 2', iscomplete: true },
        { id: 3, description: 'Task 3', iscomplete: false },
      );
      const taskIdToDelete = 2;
      taskso.DeleteTask(taskIdToDelete);
      expect(taskso.tasks).toHaveLength(2);
      expect(taskso.tasks.some(task => (task.id === taskIdToDelete))).toBeFalsy();
    });
  });
});