import React from 'react';
import Card from 'react-bootstrap/Card';
import './HomeContent.css'


const ArticleContent = () => {
    return (
        <div className="article-hero">
        <Card border="danger" className="article-Card">
          <Card.Header>Apple</Card.Header>
          <Card.Body>
            <Card.Text>
              <p className='content-text'>
              Apple’s WWDC 2020 was unique before it even began. It’s the first time Apple’s developer conference has been streamed exclusively online with no in-person event. Regardless, there were some big announcements, including some you might have been expecting and others that might catch you by surprise.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      <span></span>
      <div className='vid-box'>
        <iframe className='video-its'
          src="https://www.youtube.com/embed/_Q8AKghK44M" />
            </div>
        </div>
    );
}

export default ArticleContent;
