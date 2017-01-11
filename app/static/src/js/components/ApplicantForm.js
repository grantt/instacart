'use strict';

import React from 'react';
import Formsy from 'formsy-react';
import CONSTANTS from '../utils/constants.js';
import TextInput from './TextInput.js';
import SelectInput from './SelectInput.js';
import ApplicantActions from '../actions/ApplicantActions.js';

const ApplicantForm = React.createClass({

    displayName: "ApplicantForm",

    getDefaultProps() {
        return {
            applicant: {}
        };
    },

    getInitialState() {
        return {
            canSubmit: false
        }
    },
    enableButton() {
        this.setState({
            canSubmit: true
        });
    },
    disableButton() {
        this.setState({
            canSubmit: false
        });
    },

    onChange(payload) {
        ApplicantActions.update(payload);
    },

    submit(payload) {
        ApplicantActions.save(payload);
    },

    render() {
        return (
            <div className="application gr-12">
                <div className="header gr-12">
                    <h1>Earn money with Instacart today!</h1>
                    <h2>Sign up to be a shopper</h2>
                </div>
                <div className="content gr-12">
                    <div className="description gr-6 gr-12@mobile">
                        <p>This will be explanatory text</p>
                    </div>
                    <div className="form gr-6 gr-12@mobile">
                        <Formsy.Form
                            onValidSubmit={this.submit}
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            onChange={this.onChange}
                            className="application-form"
                            id="inquiry-draft"
                        >
                            <TextInput
                                name="first_name"
                                label="First Name"
                                value={this.props.applicant.first_name}
                                validations="isExisty"
                                validationError="Please enter your first name"
                                required
                            />
                            <TextInput
                                name="last_name"
                                label="Last Name"
                                value={this.props.applicant.last_name}
                                validations="isExisty"
                                validationError="Please enter your last name"
                                required
                            />
                            <TextInput
                                name="email"
                                type="email"
                                value={this.props.applicant.email}
                                label="Email"
                                validations="isEmail"
                                validationError="Please enter a valid email"
                                required
                            />
                            <TextInput
                                name="phone"
                                type="phone"
                                value={this.props.applicant.phone}
                                label="Phone Number"
                                validations="isNumeric"
                                validationError="Please enter a valid phone number"
                                required
                            />
                            <SelectInput
                                name="region"
                                label="Region"
                                value={this.props.applicant.region}
                                options={CONSTANTS.region_options}
                                validations="isExisty"
                                validationError="Please select a region"
                                required
                            />
                            <input type="submit" value="Let's Do This!" disabled={!this.state.canSubmit}/>
                        </Formsy.Form>
                    </div>
                </div>
            </div>
        );
    },
});

export default ApplicantForm;
