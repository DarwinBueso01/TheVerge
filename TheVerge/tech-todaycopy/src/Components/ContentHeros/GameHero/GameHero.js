import React from 'react';
import Card from 'react-bootstrap/Card';
import './ContentHero.css'


const ContentHero = () => {
    return (
        <div className="hero">
            <div className='gif'>

                <Card className="bg-dark text-white">
                    <Card.Img className="games-hero" src="https://i.giphy.com/media/xUOxeQkDWcfWGiTevu/giphy.webp" alt="Gaming GIF" />
                    <Card.ImgOverlay>
                        <Card.Title className="gaming-title">Gaming</Card.Title>
                        <Card.Text>
                        The Verge’s gaming section brings the latest video game news, reviews of the most exciting releases, and interviews with the industry’s biggest names. We cover everything from PlayStation and Xbox blockbusters, to quirky Nintendo games, to the cool indie gems on PC and Android that you might otherwise miss.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
}

export default ContentHero;
