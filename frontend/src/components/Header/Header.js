import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll () {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 60) {
          $(".site-header-class").addClass("site-header-fixed");
      } else {
          $(".site-header-class").removeClass("site-header-fixed");
      }
  });
  }

  render() {
    return (
      <header id="site-header" className="site-header-class">
        <div className="container site-header-container">
          <div className="header-left">
            <a href="/">
              <div className="logo">
                <img src="https://i.ibb.co/f2VXK3J/travelin-logo1.png" alt=""/>
                {/* <h1>Travelin</h1> */}
              </div>
            </a>
            <ul className="category-links">
              <li><a className="tab"  href="/tab/flights">Flights</a></li>
              <li><a className="tab"  href="/tab/hotels">Hotels</a></li>
              <li><a className="tab" href="/tab/cars">Cars</a></li>
              <li><a className="tab" href="/tab/cruises">Cruises</a></li>
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
