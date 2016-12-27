import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  render() {
    let {
      id,
      title,
      completed,
      createdAt,
      completedAt,
    } = this.props;

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
      <div>
        <label>
          <input
            checked={completed}
            onChange={() => {this.props.onToggle(id)}}
            ref="todoStatus"
            type="checkbox" />
          <p>{title}</p>
          <p>{renderDate()}</p>
        </label>
      </div>
    );
  }
}
