import 'style!css!sass!applicationStyles';

import {
  IndexRoute,
  Route,
  Router,
  hashHistory,
} from 'react-router';

import Main from 'Main';
import React from 'react';
import ReactDOM from 'react-dom';

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
