'use strict';

import ApiHelper from './utils/ApiHelper.js';

let exampleEndpoint = '/example';

let Api = {};

/* Example endpoint */
Api.getExample = function() {
  return ApiHelper.get(exampleEndpoint);
};

export default Api;
