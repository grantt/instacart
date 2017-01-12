'use strict';

import Reflux from 'reflux';
import _ from 'lodash';
import cookie from 'react-cookie';
import ApplicantActions from '../actions/ApplicantActions.js';
import Api from '../api.js';

let ApplicantStore = Reflux.createStore({

    listenables: [ApplicantActions],

    restrictedFields: [
        'id',
        'created_at',
        'updated_at',
    ],

    init() {
        if (cookie.load('id')) {
            this.applicant = {
                'id': cookie.load('id')
            };
            this.getApplicant();
        } else {
            this.applicant = {
                'first_name': '',
                'last_name': '',
                'email': '',
                'phone': '',
                'region': '',
            };
            _.forOwn(this.applicant, function (value, key) {
                let val = cookie.load(key);
                if (val) {
                    this.applicant[key] = val;
                }
            }.bind(this));
        }
    },

    sanitizedApplicant() {
        return _.omit(this.applicant, this.restrictedFields);
    },

    getInitialState() {
        return this.applicant;
    },

    getApplicant() {
        Api.getApplicant(this.applicant.id).then(function(response) {
            this.applicant = response;
            this.output();
        }.bind(this));
    },

    postApplicant() {
        Api.postApplicant(this.sanitizedApplicant()).then(function(response) {
            this.applicant = response;
            this.output();
        }.bind(this));
    },

    putApplicant() {
        Api.putApplicant(this.sanitizedApplicant(), this.applicant.id).then(function(response) {
            this.applicant = response;
            this.output();
        }.bind(this));
    },

    onUpdate(payload) {
        _.extend(this.applicant, payload);
        _.forOwn(this.applicant, function(value, key) {
            cookie.save(key, value, {path: '/'});
        });

        this.output();
    },

    onSave() {
        this.applicant.id ? this.putApplicant() : this.postApplicant();
    },

    changeState(newState){
        return new Promise(function(resolve) {
            resolve(ApplicantActions.update({workflow_state: newState}));
        }).then(
            ApplicantActions.save()
        );
    },

    onStartQuiz(){
        this.changeState('quiz_started');
    },

    onCompleteQuiz(){
        this.changeState('quiz_completed');
    },

    onApply(){
        this.changeState('applied');
    },

    output: function() {
        this.trigger(this.applicant);
    },
});

export default ApplicantStore;
