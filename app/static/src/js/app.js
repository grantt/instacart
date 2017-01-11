'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import ApplicantStore from './stores/ApplicantStore.js';
import NoMatch from './components/NoMatch.js';
import ApplicantForm from './components/ApplicantForm.js';


let history = createHistory();

const App = React.createClass({
  mixins: [
    Reflux.connect(ApplicantStore, 'applicant'),
  ],

  render() {
    console.log(this.state);
    return (
         <ApplicantForm applicant={this.state.applicant}/>
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