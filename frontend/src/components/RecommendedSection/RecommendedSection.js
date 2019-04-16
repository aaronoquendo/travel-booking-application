import React, { Component } from 'react';
import RecommendedItem from './RecommendedItem'


const trips = [
  {
    id: 1,
    city: 'miami',
    state: 'florida',
    departure: 'new york',
    desination: 'miami florida',
    lowest_price: 389,
    start_date: '05-15-2019',
    end_date: '05-23-2019',
    num_of_stops: 0,
    image: ''
  },
  {
    id: 2,
    city: 'los angeles',
    state: 'california',
    departure: 'new york',
    desination: 'los-angeles california',
    lowest_price: 389,
    start_date: '09-10-2019',
    end_date: '09-17-2019',
    num_of_stops: 1,
    image: ''
  },
  {
    id: 3,
    city: 'las vegas',
    state: 'nevada',
    departure: 'new york',
    desination: 'las-vegas nevada',
    lowest_price: 126,
    start_date: '04-30-2019',
    end_date: '05-06-2019',
    num_of_stops: 0,
    image: ''
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
