'use strict';

import React from 'react';

const ApplicantComplete = React.createClass({

    displayName: "ApplicantComplete",

    render() {
        return (
            <div className="application gr-12">
                <div className="header gr-12">
                    <h1>You did it!</h1>
                </div>
                <div className="content gr-12">
                    <p>We will be in touch shortly to bring you on board the Instacart team!</p>
                </div>
            </div>
        );
    },
});

export default ApplicantComplete;
