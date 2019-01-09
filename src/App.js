import React, { Component } from 'react';
import cardData from './cardData';
import Card from './components/Card/Card';
import creditImageUrl from './self.png';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className='social-card'>
        <Card 
          name={cardData.name}
          headline={cardData.headline}
          message={cardData.message}
          url={cardData.url}
          creditImageUrl={creditImageUrl}
        />
      </div>
    )
    
  }
}

export default App;
