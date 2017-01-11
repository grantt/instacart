'use strict';

import Reflux from 'reflux';
import _ from 'lodash';
import ApplicantActions from '../actions/ApplicantActions.js';
import Api from '../api.js';

let ApplicantStore = Reflux.createStore({

  listenables: [ApplicantActions],

  init() {
    this.applicant = {};
  },

  getApplicant() {

  },
  postApplicant() {

  },

  output: function() {
    this.trigger(this.applicant);
  },
});

export default ApplicantStore;
