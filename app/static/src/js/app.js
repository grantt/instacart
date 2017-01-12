'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import ApplicantStore from './stores/ApplicantStore.js';
import NoMatch from './components/NoMatch.js';
import ApplicantForm from './components/ApplicantForm.js';
import ApplicantQuiz from './components/ApplicantQuiz.js';
import ApplicantConsent from './components/ApplicantConsent.js';
import ApplicantComplete from './components/ApplicantComplete.js';


let history = createHistory();

const App = React.createClass({
  mixins: [
    Reflux.connect(ApplicantStore, 'applicant'),
  ],

  renderApplicantForm() {
    return (
        <ApplicantForm applicant={this.state.applicant}/>
    );
  },

  renderApplicantQuiz() {
    return (
        <ApplicantQuiz applicant={this.state.applicant}/>
    );
  },

  renderApplicantConsent() {
    return (
        <ApplicantConsent applicant={this.state.applicant}/>
    );
  },

  renderApplicantComplete() {
    return (
        <ApplicantComplete applicant={this.state.applicant}/>
    );
  },

  render() {
    console.log(this.state.applicant);
    let content;
    switch (this.state.applicant.workflow_state) {
      case 'quiz_started':
        content = this.renderApplicantQuiz();
        break;
      case 'quiz_completed':
        content = this.renderApplicantConsent();
        break;
      case 'applied':
        content = this.renderApplicantComplete();
        break;
      default:
        content = this.renderApplicantForm();
    }

    return (
        <div className="application gr-12">
          {content}
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