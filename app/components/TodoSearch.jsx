import React from 'react';

export default class TodoSearch extends React.Component {
  constructor (props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (e) {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  }

  render () {
    return (
      <div>
        <input
          onChange={this.handleSearch}
          placeholder="Search todos"
          ref="searchText"
          type="text"/>
        <input
          onChange={this.handleSearch}
          ref="showCompleted"
          type="checkbox"/> Search completed todos
      </div>
    );
  }
}