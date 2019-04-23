import React, { Component } from 'react';
import "./_recommendedItem.scss"
class RecommendedItem extends Component {

  render() {
    const { itemDetail } = this.props
    return (
      <div className="recommended-item col-12 col-sm-6 col-md-6 col-lg-4">
    
          <div className="recommended-item-container">
            <a href={itemDetail.link}>
              <div className="item-image">
                <img src={itemDetail.image} alt=""/>
              </div>
            </a>
            <div className="item-details">
              <h3 className="title">{itemDetail.destination}</h3>
              <p className="sub-text">{itemDetail.departure} to {itemDetail.destination}</p>
              <p className="sub-text-last">{itemDetail.start_date} - {itemDetail.end_date} • {itemDetail.num_of_days} days </p>
              <div className="item-bottom">
                <div className="left-items">
                  <i className="fas fa-plane-departure"></i>
                  <div className="price-stops">
                    <p className="price-stops-title">${itemDetail.lowest_price}+</p>
                    <p className="price-stops-item"> {itemDetail.num_of_stops} stops</p>
                  </div>
                </div>
                <a href="/flights">
                  <button className="item-btn">
                    <span className="btn-span">Find Flights</span>
                  </button>
                </a>

              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export default RecommendedItem;
