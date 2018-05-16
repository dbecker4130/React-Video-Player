console.log('Helllllloo');

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const Index = () => {
    return (
        <div>
            <h1>VIDEO</h1>
            <video src="https://s3-us-west-2.amazonaws.com/dt-becker-portfolio/Baker-trails.mp4" autoPlay loop></video>
        </div>
    )
};

ReactDOM.render(<Index />, document.getElementById("index"));