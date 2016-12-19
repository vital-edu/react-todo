import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Todo from 'Todo';
import TodoList from 'TodoList';
import expect from 'expect';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should return one Todo component for each todo item', () => {
    let todos = [{
      id: 1,
      title: 'Do something',
    }, {
      id: 2,
      title: 'Test something',
    }, {
      id: 3,
      title: 'Test something again',
    }]

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);

  });
});
