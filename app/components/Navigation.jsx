import {IndexLink, Link} from 'react-router';

import React from 'react';

export default class Navigation extends React.Component {
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Boilerplate
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://github.com/vital-edu">Eduardo Vital</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

