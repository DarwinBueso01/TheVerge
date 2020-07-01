import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {  
    return (
        <div>
            <div className="wrapper">
                <div className="masthead">
                    <div className="content">
                        <h1>The Verge</h1>
                        <h3>Gaming/Science/Space</h3>
                        <Link to="/home" className="button">START!</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default LandingPage;