import * as actions from 'actions';

import expect from 'expect';

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'testing action',
    };

    let response = actions.setSearchText(action.searchText);

    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'A thing to do',
    };

    let response = actions.addTodo(action.text);

    expect(response).toEqual(action);
  });

  it('should generate toggle showCompleted action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    let response = actions.toggleShowCompleted();

    expect(response).toEqual(action);
  });

   it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 77,
    };

    let response = actions.toggleTodo(action.id);

    expect(response).toEqual(action);
  });

});

