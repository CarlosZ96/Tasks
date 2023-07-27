import { Tasks } from './task.js';
import { JSDOM } from 'jsdom';
/* eslint-disable */
describe('Tasks', () => {
  let taskso;
  let document;
  let listContainer;
  beforeEach(() => {
    taskso = new Tasks();
    taskso.tasks = [];

    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>To-Do List</title>
      </head>
      <body>
        <section class="TdContainer">
          <form class="TaskListContainer">
            <ul class="TittleContainer">
              <li><h3 class="Ttittle">Today's To Do</h3></li>
              <li><button class="upload"></button></li>
            </ul>
            <ul class="AddContainer">
              <li><input type="text" placeholder="Add to you List..." id="TaskInput" name="addtaskn"></li>
              <li><button type="submit" class="Add"></button></li>
            </ul>
            <ul class="ListContainer">
            </ul>
            <div class="clear">
              <button class="ClearButton">Clear all completed</button>
            </div>
          </form>
        </section>
      </body>
      </html>
    `);
    document = dom.window.document;
    listContainer = document.querySelector('.ListContainer');
  });

  describe('AddTask(description)', () => {
    it('should add a new task with the given description', () => {
      const description = 'Buy groceries';
      taskso.AddTask(description);
      const liElements = listContainer.querySelectorAll('li');
      expect(liElements).toHaveLength(1);
      expect(liElements[0].textContent).toBe(description);
    });
  });
  describe('DeleteTask(id)', () => {
    it('should delete the task with the given id', () => {
      taskso.tasks.push(
        { id: 1, description: 'Task 1', iscomplete: false },
        { id: 2, description: 'Task 2', iscomplete: true },
        { id: 3, description: 'Task 3', iscomplete: false }
      );
      const taskIdToDelete = 2;
      taskso.DeleteTask(taskIdToDelete);
      const liElements = listContainer.querySelectorAll('li');
      expect(liElements).toHaveLength(2);
      expect(Array.from(liElements).some(li => li.textContent === 'Task 2')).toBeFalsy();
    });
  });
});
