import React, { Component } from 'react';
import RecommendedItem from './RecommendedItem'
import "./_recommendedSection.scss"

const trips = [
  {
    id: 1,
    city: 'Miami',
    state: 'Florida',
    departure: 'New York',
    destination: 'Miami, Florida',
    lowest_price: 389,
    start_date: 'Aug 18',
    end_date: 'Aug 29',
    num_of_days: 11,
    num_of_stops: 0,
    image: 'https://s7.bluegreenvacations.com/is/image/BGV/florida-miami-south-beach-ocean-drive-art-deco-nightlife?$bg2-hero-lg$&crop=0,0,2396,1544&anchor=1198,772',
    link: '/flights'
  },
  {
    id: 2,
    city: 'los angeles',
    state: 'California',
    departure: 'New York',
    destination: 'Los Angeles, California',
    lowest_price: 389,
    start_date: '09-10-2019',
    end_date: '09-17-2019',
    num_of_days: 7,
    num_of_stops: 1,
    image: 'https://media.timeout.com/images/104703258/image.jpg',
    link: '/flights'
  },
  {
    id: 3,
    city: 'las vegas',
    state: 'Nevada',
    departure: 'New York',
    destination: 'Las Vegas, Nevada',
    lowest_price: 126,
    start_date: '04-30-2019',
    end_date: '05-06-2019',
    num_of_days: 10,
    num_of_stops: 0,
    image: 'https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/PM_Strip_2014_PH_North_Night_0069G_optimized_f4c0f862-8bb4-49ee-a728-98d2c1846714.jpg',
    link: '/flights'
  }
]


class RecommendedSection extends Component {

  componentDidMount () {

  }

  render() {
    const RecommendedItems = trips;

    const items = []
  
    for (const [index, value] of RecommendedItems.entries()) {
      items.push(<li key={index}>{value}</li>)
    }
  
    return (
      <div className="recommended-section">
        <div className="container recommended-sec-container">
        <h2 className="recommended-title">Popular from New York</h2>
          <div className="row recommended-sec-row">

          {RecommendedItems.map( (itemDetail, key) => {
            return <RecommendedItem itemDetail={itemDetail} key={key}/>;
          })}

          </div>
        </div>
      </div>
    );
  }
}

export default RecommendedSection;
