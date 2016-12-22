import React from 'react';

export default class Todo extends React.Component {
  render() {
    let {id, title, completed} = this.props;

    return (
      <div>
        <label>
          <input
            checked={completed}
            onChange={() => {this.props.onToggle(id)}}
            ref="todoStatus"
            type="checkbox" />
          {title}
        </label>
      </div>
    );
  }
}
