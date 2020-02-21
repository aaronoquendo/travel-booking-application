import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobileMenuOpen: false
    }
    this.openMobileMenu = this.openMobileMenu.bind(this)
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

  render () {
    return ReactDOM.createPortal(
      <div className="mobile-menu">
        <button id='header-hamburger-icon' className='hamburger hamburger--slider' type='button' onClick={this.openMobileMenu}>
              <span className='hamburger-box'>
                <span className='hamburger-inner' />
              </span>
            </button>
      </div>,
      document.querySelector('#MobileMenu')
    )
  }
}

export default MobileMenu;