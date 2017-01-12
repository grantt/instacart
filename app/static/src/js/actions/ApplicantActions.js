'use strict';

import Reflux from 'reflux';

let ApplicantActions = Reflux.createActions([
  'update',
  'startQuiz',
  'completeQuiz',
  'apply',
  'save',
]);

module.exports = ApplicantActions;
