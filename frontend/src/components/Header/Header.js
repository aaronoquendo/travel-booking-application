import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header id="site-header">
        <div className="container site-header-container">
          <div className="header-left">
            <a href="/">
              <div className="logo">
                <img src="https://i.ibb.co/f2VXK3J/travelin-logo1.png" alt=""/>
                {/* <h1>Travelin</h1> */}
              </div>
            </a>
            <ul className="category-links">
              <li><Link className="tab" to="/tab/flights">Flights</Link></li>
              <li><Link className="tab" to="/tab/hotels">Hotels</Link><a href="#/"></a></li>
              <li><Link className="tab" to="/tab/cars">Cars</Link><a href="#/"></a></li>
              <li><Link className="tab" to="/tab/cruises">Cruises</Link><a href="#/"></a></li>
            </ul>
          </div>
          <ul className="account-links">
            <li><a href="#/">Blog</a></li>
            <li><a href="#/">Trips</a></li>
            <li><a href="#/">Sign In</a></li>
          </ul>
          <button id='header-hamburger-icon' className='hamburger hamburger--slider' type='button' onClick={this.openMobileMenu}>
            <span className='hamburger-box'>
              <span className='hamburger-inner' />
            </span>
          </button>
        </div>
      </header>
    );
  }

}

export default Header;
