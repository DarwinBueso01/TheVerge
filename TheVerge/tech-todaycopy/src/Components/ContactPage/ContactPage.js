import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../ContactPage/ContactPage.css";
import Footer from '../Footer/Footer';


const contactPage = () => {
    return (
        <div>
            <Navbar page="contactPage" />
            <div class="contactTitle--0">
                <h4 className="contactTitleText">Want To Contact Us?</h4>
            </div>
            <div class="contactDecor-div"></div>
            <section className="contactForm">
                <div className="formColor-decor">
                    <div>
                        <h2 className="InfoTitle-0">Our Personal Information</h2>
                        <h3 className="Info-H3s">(555) 666-7777</h3>
                        <h3 className="Info-H3s">theverge@gmail.com</h3>
                        <h3 className="Info-H3s">123 Main Street</h3>
                    </div>
                </div>
                <div className="darwinFormContainer">
                    <form className="darwinForm" name="contact" method="POST">
                        <label for="fname">First Name</label>
                        <input type="text" className="fname" id="input-0" name="firstname" placeholder="Your name.." required />

                        <label for="lname">Last Name</label>
                        <input type="text" className="lname" id="input-0" name="lastname" placeholder="Your last name.." required />

                        <label for="email">Email</label>
                        <input type="text" className="email" id="input-0" name="email" placeholder="Your email.." required />

                        <label for="message">Message</label>
                        <textarea className="contactMessage" id="message" name="message" cols="30" rows="10" placeholder="Write something.."></textarea>

                        <div className="zoomBtn-div">
                            <input type="submit" value="Submit" name="submit" className="ContactSubmit-BTN" />
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
        

        
    )
};

export default contactPage;