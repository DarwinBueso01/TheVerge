import React from 'react';
import Card from 'react-bootstrap/Card';
import '../GameHero/ContentHero.css'


const ScienceHero = () => {
    return (
        <div className="hero">
            <div className='gif'>

                <Card className="bg-dark text-white">
                    <Card.Img className="sciences-hero"src="https://cdn.dribbble.com/users/32512/screenshots/3363261/the_wave_natural_ai_by_gleb.gif" alt="Science GIF" />
                    <Card.ImgOverlay>
                        <Card.Title className="gaming-title">Science</Card.Title>
                        <Card.Text>
                        Featuring the latest in daily science news, Verge Science is all you need to keep track of what’s going on in health, the environment, and your whole world. Through our articles, we keep a close eye on the overlap between science and technology news 
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

export default ScienceHero;
