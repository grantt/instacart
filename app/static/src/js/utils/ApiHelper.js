'use strict';

// Supports HTTP actions GET/POST/PUT/DEL to any endpoint and returns a promise
// TODO: Get cookie or auth token to authenticate requests (Depending on how we do auth)

import request from 'superagent';

let ApiHelper = {};

ApiHelper.get = function(endpoint, params) {
  return new Promise(function (resolve, reject) {
    request
        .get(endpoint)
        .query(params)
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });
  });
};

ApiHelper.post = function(endpoint, data) {
  return new Promise(function (resolve, reject) {
    request
        .post(endpoint)
        .send(data)
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });
  });
};

ApiHelper.put = function(endpoint, id, data) {
  return new Promise(function (resolve, reject) {
    request
        .put(endpoint + '/' + id)
        .send(data)
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });
  });
};

ApiHelper.del = function(endpoint) {
  return new Promise(function (resolve, reject) {
    request
        .del(endpoint)
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });
  });
};

export default ApiHelper;
