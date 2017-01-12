'use strict';

import React from 'react';
import Formsy from 'formsy-react';

const SelectInput = React.createClass({

    mixins: [Formsy.Mixin],

    getDefaultProps() {
        return {
            placeholder: 'Select An Option',
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
                <select onChange={this.changeValue} value={this.getValue()}>
                    <option defaultValue>{this.props.placeholder}</option>
                    {this.props.options.map(function(val, i) {
                        return <option key={i} value={val}>{val}</option>;
                    })}
                </select>
                <span className="input_error">{errorMessage}</span>
            </div>
        );
    }
});

export default SelectInput;