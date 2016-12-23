import AddTodo from 'AddTodo';
import Navigation from 'Navigation';
import React from 'react';
import TodoAPI from 'TodoAPI';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

export default class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos(),
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo (title) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          title: title,
          completed: false,
        }],
    });
  }

  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase(),
    });
  }

  handleToggle (id) {
    let todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos});
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
            <TodoList todos={todos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    )
  }
}
