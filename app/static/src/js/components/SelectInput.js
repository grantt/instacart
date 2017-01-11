'use strict';

import React from 'react';
import Formsy from 'formsy-react';

const SelectInput = React.createClass({

    mixins: [Formsy.Mixin],

    getDefaultProps() {
        return {
            options: [],
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
                    <option defaultValue>Select an option</option>
                    {this.props.options.map(function(val, i) {
                        return <option key={i} value={val}>{val}</option>;
                    })}
                </select>
                <span>{errorMessage}</span>
            </div>
        );
    }
});

export default SelectInput;