import 'style!css!sass!applicationStyles';

import {
  IndexRoute,
  Route,
  Router,
  hashHistory,
} from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp}>
    </Route>
  </Router>,
  document.getElementById('app')
);
