import React from 'react';
import { Link } from 'react-router-dom';


const navbar = (props) => {
    let mainPageClass, gamingPageClass, sciencePageClass, spacePageClass, contactPageClass, loginPageClass;

    if (props.page === "mainPage") {
        mainPageClass = 'current';
    } else if (props.page === "gamingPage") {
        gamingPageClass = 'current';
    } else if (props.page === "sciencePage") {
        sciencePageClass = 'current';
    } else if (props.page === "spacePage") {
        spacePageClass = 'current';
    } else if (props.page === "contactPage") {
        contactPageClass = 'current';
    } else if (props.page === "loginPage") {
        loginPageClass = 'current';
    }

    return (
        <div>
            <nav id="navbar">
                <img className="logo-img" alt="tech today logo" src="https://cdn.vox-cdn.com/thumbor/3FkMzoE5f-1_-2aADl5fFp8ivzs=/0x0:1800x1515/1200x0/filters:focal(0x0:1800x1515):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7497315/Verge3.0_Logomark_Color_1.png" />
                <h1 id="logo"><Link to="/home">The Verge</Link></h1>
                <ul>
                    <li><Link className={mainPageClass} to="/home">Home</Link></li>
                    <li><Link className={gamingPageClass} to="/gaming">Gaming</Link></li>
                    <li><Link className={sciencePageClass} to="/science">Science</Link></li>
                    <li><Link className={spacePageClass} to="/space">Space</Link></li>
                    <li><Link className={contactPageClass} to="/contact">Contact</Link></li>
                    {/* <li><Link className={signupPageClass} to="/SignUp">Sign Up</Link></li> */}
                    {/* <li><Link className={loginPageClass} to="/Login">Login</Link></li> */}
                    <li><Link className="signInPage" to="/Signup">Sign Up</Link></li>
                </ul>
            </nav>
            <nav classname="hamburger" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li><Link className={mainPageClass} to="/home">Home</Link></li>
                        <li><Link className={gamingPageClass} to="/gaming">Gaming</Link></li>
                        <li><Link className={sciencePageClass} to="/science">Science</Link></li>
                        <li><Link className={spacePageClass} to="/space">Space</Link></li>
                        <li><Link className={contactPageClass} to="/contact">Contact</Link></li>
                        <li><Link to="/Signup">Sign Up</Link></li>
                        {/* <li><Link className={signupPageClass} to="/signup">Sign In</Link></li> */}
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default navbar;