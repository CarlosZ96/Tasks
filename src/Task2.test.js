import { Tasks } from './task.js';

describe('Tasks', () => {
    let listContainerMock;
    beforeEach(() => {
        localStorage.clear();
        listContainerMock = document.createElement('div');
        listContainerMock.classList.add('ListContainer');
        document.body.appendChild(listContainerMock);
    });
    describe('ClearCompletedTasks', () => {
        it('should remove all completed tasks from the list', () => {
            const taskso = new Tasks();
            taskso.AddTask('Task 1');
            taskso.AddTask('Task 2');
            taskso.AddTask('Task 3');
            taskso.CheckTask(1, true);
            taskso.ClearCompletedTasks();
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            expect(tasks).toHaveLength(2);
            expect(tasks.map(task => task.description)).toEqual(['Task 2', 'Task 3']);
        });
        it('should not remove any tasks if no tasks are completed', () => {
            const taskso = new Tasks();
            taskso.AddTask('Task 1');
            taskso.AddTask('Task 2');
            taskso.ClearCompletedTasks();
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            expect(tasks).toHaveLength(2);
            expect(tasks.map(task => task.description)).toEqual(['Task 1', 'Task 2']);
        });

        it('should not remove any tasks if the list is empty', () => {
            const taskso = new Tasks();
            taskso.ClearCompletedTasks();
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            expect(tasks).toHaveLength(0);
        });
    });
    afterAll(() => {
        document.body.removeChild(listContainerMock);
    });
});