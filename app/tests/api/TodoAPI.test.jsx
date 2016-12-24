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

  describe('filterTodos', () => {
    let todos = [{
      id: 1,
      title: '1st todo',
      completed: true,
    }, {
      id: 2,
      title: '2nd todo',
      completed: false,
    }, {
      id: 3,
      title: '3rd todo',
      completed: true,
    }]

    describe('showCompleted argument', () => {
      it('should return all items if showCompleted is true', () => {
        let filteredTodos = TodoAPI.filterTodos(todos, true, undefined);

        expect(filteredTodos.length).toBe(3);
      });

      it('should return non-completed todos if showCompleted is false', () => {
        let filteredTodos = TodoAPI.filterTodos(todos, false, undefined);

        expect(filteredTodos.length).toBe(1);
      });
    });

    describe('searchText argument', () => {
      it('should filter todos by searchText', () => {
        let filteredTodos = TodoAPI.filterTodos(todos, true, 'rd');

        expect(filteredTodos.length).toEqual(1);
      });

      it('should return all todos if searchText is empty', () => {
        let filteredTodos = TodoAPI.filterTodos(todos, true, '');

        expect(filteredTodos.length).toEqual(3);
      });
    });

    it('should sort by complete status', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, undefined);

      expect(filteredTodos[0].completed).toEqual(false);
      expect(filteredTodos[1].completed).toEqual(true);
      expect(filteredTodos[2].completed).toEqual(true);
    });
  });
});
