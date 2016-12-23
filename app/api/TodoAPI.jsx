import $ from 'jquery';

module.exports = {
  setTodos (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos () {
    let stringTodos = localStorage.getItem('todos');
    let todos;

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
      todos = [];
    }

    return $.isArray(todos) ? todos : [];
  }
}
