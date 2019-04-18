import React, { Component } from 'react';
class Footer extends Component {
  
  render() {
    return (
      <footer className="site-footer">
        <div className="container footer-container">
          <div className="row footer-row1">
            <ul className="footer-col col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <li className="footer-col-header">Our Products</li>
              <li className="footer-col-item">Hotels</li>
              <li className="footer-col-item">Cars</li>
              <li className="footer-col-item">Flights</li>
              <li className="footer-col-item">Packages</li>
              <li className="footer-col-item">Cruises</li>
              <li className="footer-col-item">Rewards</li>
            </ul>
            <ul className="footer-col col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <li className="footer-col-header">About Travelin</li>
              <li className="footer-col-item">Contact Us</li>
              <li className="footer-col-item">Media Center</li>
              <li className="footer-col-item">Investor Relations</li>
              <li className="footer-col-item">Terms and Conditions</li>
              <li className="footer-col-item">Privacy Policy</li>
              <li className="footer-col-item">Careers</li>
            </ul>
            <ul className="footer-col col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <li className="footer-col-header">Partner with Travelin</li>
              <li className="footer-col-item">Add Your Hotel</li>
              <li className="footer-col-item">Travelin Parner Network</li>
              <li className="footer-col-item">Advertise</li>
            </ul>
            <ul className="footer-col col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <li className="footer-col-header">Connect with Travelin</li>
              <li className="footer-col-item">Facebook</li>
              <li className="footer-col-item">Instagram</li>
              <li className="footer-col-item">Twitter</li>
    
            </ul>
          </div>
          <p className="footer-footnote1">Travelin, Travelin.com, NAME YOUR OWN DEAL, EXPRESS PRICES and EVENING ONLY DEALS are service marks or registered service marks of Travelin.com LLC. All material herein © 1994-2019 Travelin.com LLC, all rights reserved. travelin.com LLC is located at 700 Wakelin Ave. Prescoot, NV 89875.</p>
          <p className="footer-footnote2">*Travelin Name Your Own Deal and Express Prices services are different from private price services. Exact hotel, airline and rental car company are shown only after booking. All sales final.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
