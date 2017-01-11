'use strict';

import React from 'react';
import Formsy from 'formsy-react';

const TextInput = React.createClass({

    mixins: [Formsy.Mixin],

    getDefaultProps() {
        return {
            type:'text'
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
                <input type={this.props.type} onChange={this.changeValue} value={this.getValue()}/>
                <span>{errorMessage}</span>
            </div>
        );
    }
});

export default TextInput;