import React from "react";
import "../HomeInfoComponent/HomeInfo.css";

class HomeTopInfo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 className="InframesTitle--0">Current News</h1>
                <section className="HomeInfo-Section-0">
                    <div className="Image-container-1"></div>
                    <div className="Info-Container-0">
                        <h1 className="darwinH1"><a className="darwinNews-aTag" href="https://www.whitehouse.gov/presidential-actions/proclamation-suspending-entry-aliens-present-risk-u-s-labor-market-following-coronavirus-outbreak/" target="_blank" rel="noopener noreferrer">TRUMP’S GUEST WORKER BAN</a></h1>
                        <p className="darwinPtag">Proclamation suspending the entry of guest workers to the United States, supposedly in response to unprecedented unemployment levels.</p>
                    </div>
                    <div className="Image-container-2"></div>
                    <div className="Info-Container-0">
                        <h1 className="darwinH1"><a className="darwinNews-aTag" href="https://www.theverge.com/21304792/level-lock-smart-homekit-review-test-price-specs-features" target="_blank" rel="noopener noreferrer">Level Lock review: smarts you can’t see</a></h1>
                        <p className="darwinPtag">The Level Lock is a new smart lock that bucks those trends: once it’s installed, it’s completely invisible and hides all of its electronics. </p>
                    </div>
                </section>   
            </React.Fragment> 
        )
    }  
}

export default HomeTopInfo;