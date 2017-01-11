'use strict';

import React from 'react';
import _ from 'lodash';
import Formsy from 'formsy-react';

const SelectInput = React.createClass({

    mixins: [Formsy.Mixin],

    getDefaultProps() {
        return {
            options: {},
        }
    },

    changeValue(e) {
        this.setValue(e.currentTarget.value);
    },


    render() {
        const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

        const errorMessage = this.getErrorMessage();

        return (
            <div className={className}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <select onChange={this.changeValue} value={this.getValue()}>
                    <option value="dallas">Dallas</option>
                    <option value="sfbayarea">San Francisco Bay Area</option>
                </select>
                <span>{errorMessage}</span>
            </div>
        );
    }
});

export default SelectInput;