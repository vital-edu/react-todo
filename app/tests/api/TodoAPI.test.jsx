import TodoAPI from 'TodoAPI';
import expect from 'expect';

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    });

    it('should set valid todos array', () => {
      let todos = [{
        id: 123,
        title: 'test all files',
        completed: false,
      }];
      TodoAPI.setTodos(todos);
      let actualTodos = TodoAPI.getTodos('todos');

      expect(actualTodos).toEqual(todos);
    });

    it('should not set todos that is not in an array', () => {
      let todo = {
        id: 123,
        title: 'test all files',
        completed: false,
      };
      TodoAPI.setTodos(todo);
      let actualTodos = localStorage.getItem('todos');

      expect(actualTodos).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return an empty array for bad localstorage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localstorage', () => {
      let todos = [{
        id: 123,
        title: 'test all files',
        completed: false,
      }];
      localStorage.setItem('todos', JSON.stringify(todos))
      let actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
