import React, { Component } from 'react';
import './carousel.css';
import Card from './Card';
import data from './data/space/data'

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cards: data.cards,
      card: data.cards[5]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.card.index+1;
    this.setState({
      card: data.cards[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.card.index-1;
    this.setState({
      card: data.cards[newIndex]
    })
  }

  render() {
    const {cards, card} = this.state;
    return (
      <div className="als-App">

        <div className="button__container-align">
          <button 
              className="change__btn-carousel"
              onClick={() => this.prevProperty()} 
              disabled={card.index === 0}>
              Prev
          </button>

          <button 
              className="change__btn-carousel"
              onClick={() => this.nextProperty()} 
              disabled={card.index === data.cards.length-1}>
              Next
          </button>
        </div>
        
        

        <div className="als-Page">
            <div className="als-Col">
              <div className={`cards-slider active-slide-${card.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${card.index*(100/cards.length)}%)`
                }}>
                  {
                    data.cards.map(card => <Card key={card._id} card={card} category={card.category}/>)
                  }
                </div>
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default App;