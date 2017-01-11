'use strict';

import ApiHelper from './utils/ApiHelper.js';

let applicantEndpoint = '/applicants';

let Api = {};

/* Applicant endpoint */
Api.getApplicant = function() {
  return ApiHelper.get(applicantEndpoint);
};

Api.postApplicant = function(applicant) {
  return ApiHelper.post(applicantEndpoint, applicant);
};

Api.putApplicant = function(applicant, applicant_id) {
  return ApiHelper.put(applicantEndpoint, applicant_id, applicant);
};

export default Api;
