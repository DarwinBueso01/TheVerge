import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../Content/HomeContent.css'


const ScienceContent = () => {
    return (
        <div className="card-container">
                <Card.Header>
                    <h4 className="title">Science</h4>
                    <span className="read-link" >Read More</span>
                </Card.Header>

            <CardGroup className="card-in-home">
                <Card className="cards-box" border="info">
                <a target="_blank" href="https://nyti.ms/2NEhe5q">
                    <Card.Img variant="top" src="https://bit.ly/2YNcZLh" />
                    </a>
                    <Card.Body>
                        <a target="_blank" href ="https://nyti.ms/3gaQllx">
                            <Card.Title className="title-jj">Why rocket launches have failed to unite us
                            </Card.Title>
                        </a>
                        <Card.Text>
                        A compact mechanical keyboard takes up less space on a desk than a regular one—but you might need to be prepared to give up some keys in return.
                        
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">by Kimber Streams</small>
                    </Card.Footer>
                </Card>

                <Card className="cards-box" border="danger">
                <a target="_blank" href="https://www.nytimes.com/wirecutter/reviews/best-couch-co-op-nintendo-switch-games/">
                    <Card.Img variant="top" src="https://bit.ly/38iMBvy" />
                    </a>
                    <Card.Body>
                        <a className="homeContent-text" target="_blank" href="https://nyti.ms/2NEhe5q">
                        
                        <Card.Title className="home-j-title">New data zooms in on air pollution mapped by Google Street View cars</Card.Title>
                        </a>
                        <Card.Text>
                        Google and Aclima, a company that maps hyperlocal air pollution, announced today that researchers can now access a treasure trove of new data that can bolster efforts to both combat climate change and clean up the air.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">by Andrew Cunningham</small>
                    </Card.Footer>
                </Card>
                
                <Card className="cards-box" border="info">
                    <a target="_blank" href="https://nyti.ms/2NEhe5q">
                    <Card.Img variant="top" src="https://bit.ly/2ZoeqyF" />
                    </a>
                    <Card.Body>
                    <a target="_blank" href="https://nyti.ms/2NEhe5q">
                        <Card.Title className="title-jj">NASA wants to hear your ideas for engineering the best toilet to use on the Moon</Card.Title>
                        </a>
                        <Card.Text>
                        When NASA sends astronauts back to the Moon, they’ll need a place to go to the bathroom when they reach the lunar surface.
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Loren Grush</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}
export default ScienceContent;



