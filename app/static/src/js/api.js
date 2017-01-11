'use strict';

import ApiHelper from './utils/ApiHelper.js';

let applicantEndpoint = '/applicants';

let Api = {};

/* Applicant endpoint */
Api.getApplicant = function(applicant_id) {
  return ApiHelper.get(applicantEndpoint, applicant_id);
};

Api.postApplicant = function(applicant) {
  return ApiHelper.post(applicantEndpoint, applicant);
};

Api.putApplicant = function(applicant, applicant_id) {
  return ApiHelper.put(applicantEndpoint, applicant_id, applicant);
};

export default Api;
