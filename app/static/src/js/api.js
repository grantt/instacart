'use strict';

import ApiHelper from './utils/ApiHelper.js';

let applicantEndpoint = '/applicants';

let Api = {};

/* Example endpoint */
Api.getApplicant = function() {
  return ApiHelper.get(applicantEndpoint);
};

export default Api;
