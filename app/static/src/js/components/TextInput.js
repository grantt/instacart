'use strict';

import React from 'react';
import Formsy from 'formsy-react';

const TextInput = React.createClass({

    mixins: [Formsy.Mixin],

    getDefaultProps() {
        return {
            type:'text',
            placeholder: 'TextInput'
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
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={this.changeValue}
                    value={this.getValue()}
                />
                <span className="input_error">{errorMessage}</span>
            </div>
        );
    }
});

export default TextInput;