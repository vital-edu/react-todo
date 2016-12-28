import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  render () {
    let {
      id,
      title,
      completed,
      createdAt,
      completedAt,
    } = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';

    function renderDate () {
      let message, timestamp;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt
      } else {
        message = 'Created ';
        timestamp = createdAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }

    return (
      <label>
        <div className={todoClassName}>
          <div>
            <input
              checked={completed}
              onChange={() => { this.props.onToggle(id) } }
              ref="todoStatus"
              type="checkbox"
              />
          </div>
          <div>
            <p>{title}</p>
            <p className="todo__subtext">{renderDate()}</p>
          </div>
        </div>
      </label>
    );
  }
}
