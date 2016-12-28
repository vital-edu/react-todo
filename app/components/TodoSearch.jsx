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
      <div className="container__header">
        <div>
          <input
            onChange={this.handleSearch}
            placeholder="Search todos"
            ref="searchText"
            type="text"
          />
        </div>
        <div>
          <label>
            <input
              onChange={this.handleSearch}
              ref="showCompleted"
              type="checkbox"/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}
