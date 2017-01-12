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

    submit() {
        ApplicantActions.startQuiz();
    },

    render() {
        return (
            <div>
                <div className="header gr-12 row">
                    <h1>Earn money with Instacart today!</h1>
                    <h2>Sign up to be a shopper</h2>
                </div>
                <div className="content gr-12 row row-align-center row-align-middle">
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
                                desktopWidth="6"
                                tabletWidth="6"
                                mobileWidth="12"
                                name="first_name"
                                value={this.props.applicant.first_name}
                                placeholder="First Name"
                                validations="isExisty"
                                validationError="Please enter your first name"
                                required
                            />
                            <TextInput
                                desktopWidth="6"
                                tabletWidth="6"
                                mobileWidth="12"
                                name="last_name"
                                value={this.props.applicant.last_name}
                                placeholder="Last Name"
                                validations="isExisty"
                                validationError="Please enter your last name"
                                required
                            />
                            <TextInput
                                desktopWidth="12"
                                tabletWidth="12"
                                mobileWidth="12"
                                name="email"
                                type="email"
                                value={this.props.applicant.email}
                                placeholder="Email"
                                validations="isEmail"
                                validationError="Please enter a valid email"
                                required
                            />
                            <TextInput
                                desktopWidth="12"
                                tabletWidth="12"
                                mobileWidth="12"
                                name="phone"
                                type="phone"
                                value={this.props.applicant.phone}
                                placeholder="Phone Number"
                                validations={{
                                    matchRegexp: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                                }}
                                validationError="Please enter a valid phone number"
                                required
                            />
                            <SelectInput
                                desktopWidth="12"
                                tabletWidth="12"
                                mobileWidth="12"
                                name="region"
                                label="Region"
                                value={this.props.applicant.region}
                                options={CONSTANTS.region_options}
                                placeholder="Select your region"
                                validations="isExisty"
                                validationError="Please select a region"
                                required
                            />
                            <button
                                className="gr-centered gr-6 gr-12@mobile gr-12@tablet"
                                onClick={this.submit}
                                disabled={!this.state.canSubmit}
                            >
                                Let's Do This! <i className="mdfi_navigation_arrow_forward"></i>
                            </button>
                        </Formsy.Form>
                    </div>
                </div>
            </div>
        );
    },
});

export default ApplicantForm;
