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
  },
  filterTodos (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      // showCompleted filter
      if (todo.completed && !showCompleted) {
        return false;
      }

      // searchText filter
      if (searchText && todo.title.toLowerCase().indexOf(searchText) < 0) {
        return false;
      }

      return true;
    });

    filteredTodos = filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed)
        return -1;
      else {
        return 1;
      }
    })

    return filteredTodos;
  },
}
