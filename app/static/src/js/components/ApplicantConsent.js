'use strict';

import React from 'react';
import Formsy from 'formsy-react';
import TextInput from './TextInput.js';
import SelectInput from './SelectInput.js';
import ApplicantActions from '../actions/ApplicantActions.js';

const ApplicantConsent = React.createClass({

    displayName: "ApplicantConsent",

    getDefaultProps() {
        return {
            applicant: {}
        };
    },

    onClick(e) {
        e.preventDefault();
        ApplicantActions.apply();
    },

    render() {
        return (
            <div className="application gr-12">
                <div className="header gr-12">
                    <h1>One last step!</h1>
                </div>
                <div className="content gr-12">
                    <div className="description gr-6 gr-12@mobile">
                        <p>To ensure the safety of our customers and to make sure our team is the best around, we conduct a simple background check on all our shoppers. By clicking "I agree", you consent to us conducting a background check through a third-party. </p>
                    </div>
                    <div className="form gr-6 gr-12@mobile">
                        <button onClick={this.onClick}>I agree</button>
                    </div>
                </div>
            </div>
        );
    },
});

export default ApplicantConsent;
