'use strict';

import Reflux from 'reflux';
import _ from 'lodash';
import ExampleActions from '../actions/ExampleActions.js';
import Api from '../api.js';

let ExampleStore = Reflux.createStore({

  listenables: [ExampleActions],

  init() {
    this.example = {
      text: "Hello World"
    };
  },

  // getExample() {
  //   Api.me().then(function(result) {
  //     console.log(result);
  //     this.user = result;
  //     this.output();
  //   }.bind(this))
  //   .catch(function(err) {
  //     alert('Oh no! error ' + err);
  //   }.bind(this));
  // },


  output: function() {

    this.trigger(this.example);
  },
});

export default ExampleStore;
