import React, { Component } from 'react';
class HeroDisplay extends Component {
  render() {
    return (
      <div className="hero-display">
        <div className="container hero-display-container">
        <div style={{display:'flex', alignItems: 'center'}}>
          <h1 style={{textAlign:'center', fontSize: 30}}>This is some dummy text</h1>

        </div>
        
        </div>
      </div>
    );
  }
}

export default HeroDisplay;
