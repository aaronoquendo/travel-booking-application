import React, { Component } from 'react';


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
              <li><a href="#/">Flights</a></li>
              <li><a href="#/">Hotels</a></li>
              <li><a href="#/">Cars</a></li>
              <li><a href="#/">Packages</a></li>
              <li><a href="#/">Cruises</a></li>
            </ul>
          </div>

      
          <ul className="account-links">
            <li><a href="#/">Trips</a></li>
            <li><a href="#/">Sign In</a></li>
          </ul>

        </div>
      </header>
    );
  }

}

export default Header;
