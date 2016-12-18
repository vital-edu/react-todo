import Navigation from 'Navigation';
import React from 'react';
import TodoList from 'TodoList';

export default class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [{
        id: 1,
        title: 'Create app',
      }, {
        id: 2,
        title: 'Go to the party',
      }, {
        id: 3,
        title: 'Commit changes',
      }],
    };
  }

  render() {
    let { todos } = this.state;

    return (
      <div>
        <Navigation />
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h1 className="page-title">Todo App</h1>
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
    )
  }
}
