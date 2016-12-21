import React from 'react';

export default class Todo extends React.Component {
  render() {
    let {id, title} = this.props;
    return (
      <div>
        {title}
      </div>
    );
  }
}
