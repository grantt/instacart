'use strict';

import React from 'react';
import Formsy from 'formsy-react';
import TextInput from './TextInput.js';
import SelectInput from './SelectInput.js';

const ApplicantForm = React.createClass({

    displayName: "ApplicantForm",

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

    submit(payload) {
        console.log(payload);
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
                            className="application-form"
                            id="inquiry-draft"
                        >
                            <TextInput
                                name="first_name"
                                label="First Name"
                                validations="isExisty"
                                validationError="Please enter your first name"
                                required
                            />
                            <TextInput
                                name="last_name"
                                label="Last Name"
                                validations="isExisty"
                                validationError="Please enter your last name"
                                required
                            />
                            <TextInput
                                name="email"
                                type="email"
                                label="Email"
                                validations="isEmail"
                                validationError="Please enter a valid email"
                                required
                            />
                            <TextInput
                                name="phone"
                                type="phone"
                                label="Phone Number"
                                validations="isNumeric"
                                validationError="Please enter a valid phone number"
                                required
                            />
                            <SelectInput
                                name="region"
                                label="Region"
                                options={this.props.regions}
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
