'use strict';

import React from 'react';

const ApplicantComplete = React.createClass({

    displayName: "ApplicantComplete",

    render() {
        return (
            <div className="application gr-12">
                <div className="header gr-12">
                    <h1 className="center-text gr-centered">You did it!</h1>
                </div>
                <div className="content gr-12">
                    <div className="description gr-centered gr-8">
                        <p>We will be in touch shortly to bring you on board the Instacart team!</p>
                        <p>In the meantime please check out our <a href="#">New Shopper Questions</a> page to learn more about what to expect from working with Instacart.</p>
                        <p className="center-text">Welcome!</p>
                    </div>
                </div>
            </div>
        );
    },
});

export default ApplicantComplete;
