import React from 'react';
import Card from 'react-bootstrap/Card';
import '../GameHero/ContentHero.css'


const SpaceHero = () => {
    return (
        <div className="hero">
            <div className='gif'>

                <Card className="bg-dark text-white">
                    <Card.Img className="spaces-hero" src="https://bit.ly/2Bq2xAj" alt="Space GIF" />
                    <Card.ImgOverlay>
                        <Card.Title className="gaming-title">Space</Card.Title>
                        <Card.Text>
                        Verge Science is here to bring you the most up-to-date space news and analysis, whether it’s about the latest findings from NASA or comprehensive coverage of the next SpaceX rocket launch to the International Space Station. We’ll take you inside the discoveries of new exoplanets, space weather, space policy, and the booming commercial space industry.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>


                {/* <br>
          </br>
        <Card>
          <Card.Header>Gaming</Card.Header>
          <Card.Body>
            <Card.Text>
              <p className='content-text'>
                The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <span></span>
      <div className='vid-box'>
        <iframe className='video-its'
          src="https://www.youtube.com/embed/_Q8AKghK44M" /> */}
            </div>
        </div>
    );
}

export default SpaceHero;
