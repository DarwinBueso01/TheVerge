import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content-image">
                    <img src={"https://i.redd.it/9x2tpom2otg21.png"} height={"140rem"} width={"215rem"} alt="hellp" />
                    <div className="socials-heading">
                        <h3>Connect With Us</h3>
                    </div>

                    <div className="footer__content-socials">
                        <Link to={"https://www.facebook.com"}><i className="fa fa-facebook-f"></i></Link>
                        <a href="{https://www.instagram.com/}"><i className="fa fa-instagram"></i></a>
                        <a href="{https://www.twitter.com/}"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
                <div className="footer__subscribe">
                    <div className="footer__subscribe-form">
                        <h3>Subscribe to our newsletter</h3>
                        <p>Looking to receive the latest news and updates?</p>
                        <input className="footer__input" type="text" placeholder="Your email adress"></input>
                        <button className="footer__btn">Sign Up</button>
                    </div>
                </div>
                <div className="footer__content-links">
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Notice</li>
                        <li>Cookie Policy</li>
                        <li>Do not sell my info</li>
                    </ul>

                    <ul>
                        <li>Communications Preferences</li>
                        <li>Licensing FAQ</li>
                        <li>Accessbility</li>
                        <li>Platform Status</li>
                    </ul>

                    <ul>
                        <li>Tip Us</li>
                        <li>Community Guidelines</li>
                        <li>About</li>
                        <li>Ethics Statement</li>
                    </ul>
                </div>
                

            </div>

            <div className="footer__bottom">
                <div className="footer__bottom-copyright">
                    <h3>© 2020 Vox Media, LLC. All Rights Reserved</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;