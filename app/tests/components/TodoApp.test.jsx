import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoApp from 'TodoApp';
import TodoList from 'TodoList';
import expect from 'expect';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoTitle = 'New Todo Text';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoTitle);

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].title).toBe(todoTitle);

  });

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      title: 'Text feature',
      completed: false,
    };
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  })
});
