import AddTodo from 'AddTodo';
import Navigation from 'Navigation';
import React from 'react';
import TodoAPI from 'TodoAPI';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import moment from 'moment';
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

  componentDidUpdate () {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined,
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
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({todos});
  }

  render () {
    let { todos, showCompleted, searchText } = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <Navigation />
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-4">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
