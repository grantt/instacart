'use strict';

import React from 'react';

const ApplicantComplete = React.createClass({

    displayName: "ApplicantComplete",

    render() {
        return (
            <div>
                <div className="header gr-12 row">
                    <h1 className="center-text gr-centered">You did it!</h1>
                </div>
                <div className="content gr-12 row row-align-center row-align-middle">
                    <div className="description gr-centered gr-8">
                        <p>We will be in touch shortly to bring you on board the Instacart team!</p>
                        <p>In the meantime please check out our <a href="#">New Shopper Questions</a> page to learn more about what to expect from working with Instacart.</p>
                        <h2 className="gr-centered center-text">Welcome!</h2>
                    </div>
                </div>
            </div>
        );
    },
});

export default ApplicantComplete;
