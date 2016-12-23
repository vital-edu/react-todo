import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Todo from 'Todo';
import expect from 'expect';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    let todoDate = {
      id: 199,
      title: 'Write todo.text.jsx test',
      completed: true,
    };

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoDate} onToggle={spy} />);

    todo.refs.todoStatus.checked = false;
    TestUtils.Simulate.change(todo.refs.todoStatus);

    expect(spy).toHaveBeenCalledWith(199);
  });
});
