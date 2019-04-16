import React, { Component } from 'react';

class RecommendedItem extends Component {

  render() {
    const { itemDetail } = this.props;
    return (
      <div className="recommended-item col-4">
        <h1>I am an Item</h1>
        <h1>My id is {itemDetail.id} </h1>
        <h1>My city is {itemDetail.city} </h1>
        <h1>My state is  is {itemDetail.state} </h1>
        <h1>My departure is {itemDetail.departure} </h1>
      </div>
    );
  }
}

export default RecommendedItem;
