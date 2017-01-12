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
                <label>{this.props.placeholder}</label>
                <select
                    onChange={this.changeValue}
                    value={this.getValue()}
                >
                    {this.props.options.map(function(val, i) {
                        return <option key={i} value={val}>{val}</option>;
                    })}
                </select>
            </div>
        );
    }
});

export default SelectInput;