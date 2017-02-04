import * as reducers from 'reducers';

import df from 'deep-freeze-strict';
import expect from 'expect';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog',
      };
      let response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Walk the dog',
      };
      let response = reducers.todoReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      let todos = [
        {
          id: 4,
          completed: true,
          completedAt: 1,
        },
        {
          id: 7,
          completed: false,
          completedAt: undefined,
        }
      ];
      let action = {
        type: 'TOGGLE_TODO',
        id: 4
      };
      let response = reducers.todoReducer(df(todos), df(action));

      expect(response[0].completed).toEqual(false);
      expect(response[0].completedAt).toEqual(undefined);
    });
  });
})
