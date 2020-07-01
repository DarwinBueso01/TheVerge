import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../Content/HomeContent.css'


const SpaceContent = () => {
    return (
        <div className="card-container">
                <Card.Header>
                    <h4 className="title">Space</h4>
                    <span className="read-link" >Read More</span>
                </Card.Header>

            <CardGroup className="card-in-home">
                <Card className="cards-box" border="warning">
                <a target="_blank" href="https://nyti.ms/2NEhe5q">
                    <Card.Img variant="top" src="https://bit.ly/31uWIvY" />
                    </a>
                    <Card.Body>
                        <a target="_blank" href ="https://nyti.ms/3gaQllx">
                            <Card.Title className="title-jj">NASA delays launch of next Mars rover
                            </Card.Title>
                        </a>
                        <Card.Text>
                        NASA is pushing back the launch of it next Mars rover, called Perseverance, by a week, due to a problem with the rocket that’s supposed to send the spacecraft to the Red Planet. The rover is now slated to launch no earlier than July 30th out of Cape Canaveral, Florida.
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Loren Grush</small>
                    </Card.Footer>
                </Card>

                <Card className="cards-box" border="info">
                <a target="_blank" href="https://www.nytimes.com/wirecutter/reviews/best-couch-co-op-nintendo-switch-games/">
                    <Card.Img variant="top" src="https://bit.ly/2NLx5yV" />
                    </a>
                    <Card.Body>
                        <a className="homeContent-text" target="_blank" href="https://nyti.ms/2NEhe5q">
                        
                        <Card.Title className="home-j-title">SpaceX successfully launches an updated GPS satellite</Card.Title>
                        </a>
                        <Card.Text>
                        SpaceX’s Falcon 9 rocket launched at 4:10PM ET, following a short delay due to high winds above the launch site. After the launch, SpaceX’s Falcon 9 successfully landed on the company’s drone ship in the Atlantic.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Loren Grush</small>
                    </Card.Footer>
                </Card>
                
                <Card className="cards-box" border="danger">
                    <a target="_blank" href="https://nyti.ms/2NEhe5q">
                    <Card.Img variant="top" src="https://bit.ly/2ZnIVoy" />
                    </a>
                    <Card.Body>
                    <a target="_blank" href="https://nyti.ms/2NEhe5q">
                        <Card.Title className="title-jj">Satellites documented COVID-19’s impact from space</Card.Title>
                        </a>
                        <Card.Text>
                        NASA, ESA, and JAXA took snapshots of COVID-19’s effects on economic activity and pollution
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Justine Calma</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}
export default SpaceContent;



