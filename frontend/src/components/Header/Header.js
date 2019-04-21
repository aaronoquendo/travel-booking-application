import React, { Component } from 'react';
import MobileMenu from './MobileMenu';
import $ from 'jquery';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobileMenuOpen: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.openMobileMenu = this.openMobileMenu.bind(this)
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
  openMobileMenu () {
    let hamburgerIcon = document.querySelector('.hamburger.hamburger--slider')
    let mobileMenu = document.querySelector('.mobile-menu')
    this.setState((state) => {
      hamburgerIcon.classList.toggle('is-active')
      mobileMenu.classList.toggle('isFlexActive')
      return { isMobileMenuOpen: !state.isMobileMenuOpen }
    })
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
          <MobileMenu />
        </div>
      </header>
    );
  }

}

export default Header;
