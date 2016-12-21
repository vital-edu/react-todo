import AddTodo from 'AddTodo';
import Navigation from 'Navigation';
import React from 'react';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

export default class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [{
        id: uuid(),
        title: 'Create app',
      }, {
        id: uuid(),
        title: 'Go to the party',
      }, {
        id: uuid(),
        title: 'Commit changes',
      }],
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo (title) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          title: title,
        }],
    });
  }

  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase(),
    });
  }

  render() {
    let { todos } = this.state;

    return (
      <div>
        <Navigation />
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h1 className="page-title">Todo App</h1>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    )
  }
}
