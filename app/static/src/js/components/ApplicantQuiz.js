'use strict';

import React from 'react';
import Formsy from 'formsy-react';
import CONSTANTS from '../utils/constants.js';
import SelectInput from './SelectInput.js';
import ApplicantActions from '../actions/ApplicantActions.js';

const ApplicantQuiz = React.createClass({

    displayName: "ApplicantQuiz",

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
        ApplicantActions.completeQuiz();
    },

    render() {
        return (
            <div>
                <div className="header gr-12 row">
                    <h1>A couple of questions for you</h1>
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
                        >
                            <SelectInput
                                name="over_21"
                                placeholder="Are you 21 or older?"
                                value={this.props.applicant.over_21}
                                options={CONSTANTS.over_21_options}
                                validations="isExisty"
                                validationError="Please select an option"
                                required
                            />
                            <SelectInput
                                name="source"
                                placeholder="How did you hear about us?"
                                value={this.props.applicant.source}
                                options={CONSTANTS.source_options}
                            />
                            <button onClick={this.submit} disabled={!this.state.canSubmit}>Continue <i className="mdfi_navigation_arrow_forward"></i></button>
                        </Formsy.Form>
                    </div>
                </div>
            </div>
        );
    },
});

export default ApplicantQuiz;
