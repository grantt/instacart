'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import ExampleStore from './stores/ExampleStore.js';
import NoMatch from './components/NoMatch.js';

let history = createHistory();

const App = React.createClass({
  mixins: [
    Reflux.connect(ExampleStore, 'example'),
  ],

  render() {
    return (
      <div className="gr-12">
        <p>Hello World</p>
        <p>Test</p>
      </div>
    );
  },
});

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('container'));