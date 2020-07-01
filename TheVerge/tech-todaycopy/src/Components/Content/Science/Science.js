import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../Content/HomeContent.css'


const Science = () => {
    return (
        <div className="card-container">
            <CardGroup className="card-in-home">
                <Card border="warning">
                <a target="_blank" href="https://bit.ly/3giNAip">
                    <Card.Img variant="top" src="https://bit.ly/38eeNzM" />
                </a>
                    <Card.Body>
                        <a target="_blank" href ="https://bit.ly/3giNAip">
                            <Card.Title className="title-jj">Researchers figure out how long novel coronavirus antibodies last
                            </Card.Title>
                        </a>
                        <Card.Text>
                        The American Red Cross is testing all donated blood for novel coronavirus antibodies and will use that information to learn more about the spread of COVID-19.
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Chaim Gartenberg</small>
                    </Card.Footer>
                </Card>
                <Card border="danger">
                <a target="_blank" href="https://bit.ly/3gePmB3">
                    <Card.Img variant="top" src="https://bit.ly/2AiSixf" />
                    </a>
                    <Card.Body>
                        <a className="homeContent-text" target="_blank" href="https://bit.ly/3gePmB3">
                        
                        <Card.Title className="home-j-title">California makes zero-emission trucks and vans mandatory by 2045</Card.Title>
                        </a>
                        <Card.Text>
                        California’s Air Resources Board (CARB) has passed a new rule that says all commercial trucks and vans sold in the state in 2045 must be zero-emission
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Sean O'Kane</small>
                    </Card.Footer>
                </Card>
                <Card border="warning">
                    <a target="_blank" href="https://bit.ly/3dPiX2a">
                    <Card.Img variant="top" src="https://bit.ly/3g9epVW" />
                    </a>
                    <Card.Body>
                    <a target="_blank" href="https://bit.ly/3dPiX2a">
                        <Card.Title className="title-jj">
Amazon is renaming the Seattle NHL stadium Climate Pledge Arena</Card.Title>
                        </a>
                        <Card.Text>
                        Seattle’s NHL team doesn’t have a name yet, but its arena does, after Amazon secured the naming rights to the former Key Arena.
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Kim Lyons </small>
                    </Card.Footer>
                </Card>
            </CardGroup>










            <CardGroup className="card-in-home">
            <Card border="warning">
                <a target="_blank" href="https://bit.ly/2BSR2RW">
                    <Card.Img variant="top" src="https://bit.ly/2ZnNu25" />
                </a>
                    <Card.Body>
                        <a target="_blank" href ="https://bit.ly/2BSR2RW">
                            <Card.Title className="title-jj">Astronomers see first light flare from two distant black holes colliding
                            </Card.Title>
                        </a>
                        <Card.Text>
                        A whopping 7.5 billion light-years from Earth, two black holes, each about the size of Long Island, rapidly spun around each other several times per second before smashing together in a cataclysmic explosion that sent shockwaves through the Universe. 
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Chaim Gartenberg</small>
                    </Card.Footer>
                </Card>
                <Card border="danger">
                <a target="_blank" href="https://bit.ly/3gePmB3">
                    <Card.Img variant="top" src="https://bit.ly/2YRCRFT" />
                    </a>
                    <Card.Body>
                        <a className="homeContent-text" target="_blank" href="https://bit.ly/3gePmB3">
                        
                        <Card.Title className="home-j-title">Two months after last peak, US hits grim new record in COVID-19 cases
                        </Card.Title>
                        </a>
                        <Card.Text>
                        There were 38,672 positive COVID-19 tests reported in the United States today, a new record high, according to the COVID Tracking Project,
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">By Jay Peters</small>
                    </Card.Footer>
                </Card>
                <Card border="warning">
                    <a target="_blank" href="https://bit.ly/3dPiX2a">
                    <Card.Img variant="top" src="https://bit.ly/2VyeieV" />
                    </a>
                    <Card.Body>
                    <a target="_blank" href="https://bit.ly/3dPiX2a">
                        <Card.Title className="title-jj">Startup on quest to 3D-print rockets now has a second launch site on the California coast
                        </Card.Title>
                        </a>
                        <Card.Text>
                        Rocket startup Relativity Space is expanding its launch sites from one to two, with a new agreement to fly its future rocket out of Vandenberg Air Force Base in Southern California.
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
export default Science;



