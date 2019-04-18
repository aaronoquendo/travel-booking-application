import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
    <div className="choice-banner">

      <div class="choice-banner-content">
        <h2>Your stay just got more rewarding with<br/>
          <span>
            <strong>Choice Privileges</strong>
            </span>
        </h2>
        <ul class="list-unstyled">
          <li>Get exclusive perks with Your Extras</li>
          <li>Earn 10 points per $1 spent</li>
          <li>Save with exclusive member rates</li>
          <li>Elite members can earn bonus points or a gift at check-in</li>
        </ul>
        <a class="btn-cta cta-primary cta-md" href="/">Join free Today</a>
    
      </div>
    </div>
    );
  }
}

export default Banner;
