import React from 'react'

export default class AddTodo extends React.Component {
  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.props.onAddTodo(todoText)
      this.refs.todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            label="todo title"
            placeholder="What do you need to do?"
            ref="todoText"
            type="text"
            />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}
