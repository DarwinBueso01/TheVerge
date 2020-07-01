import React from "react";
import "../HomeHero/HomeHero.css";
import {Link} from 'react-router-dom';


class HomeHero extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="heroSection">
                    <div className="heroImage">
                        <div className="heroInfo">
                            <h1>The Verge</h1>
                            <p>TUESDAY, JUNE 30, 2020 APPLY PRESSURE FOR MOVEMENT</p>
                            <button className="darwinHero-btn"><Link to="/contact" className="darwinHero-btn">Contact Us</Link></button>
                        </div>
                    </div>
                </section>
        </React.Fragment>
        )
    }
}

export default HomeHero;