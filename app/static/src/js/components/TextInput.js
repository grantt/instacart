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

    getClassName() {
        let status = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
        let desk = this.props.desktopWidth ? "gr-" + this.props.desktopWidth : "";
        let tablet = this.props.tabletWidth ? "gr-" + this.props.tabletWidth + "@tablet" : "";
        let mobile = this.props.mobileWidth ? "gr-" + this.props.mobileWidth + "@mobile" : "";
        return status + " " + desk + " " + tablet + " " + mobile;
    },

    changeValue(e) {
        this.setValue(e.currentTarget.value);
    },

    render() {
        let errorMessage = this.getErrorMessage();

        return (
            <div className={this.getClassName()}>
                <span className="input_error">{errorMessage}</span>
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={this.changeValue}
                    value={this.getValue()}
                />
            </div>
        );
    }
});

export default TextInput;