import React from 'react'
import './Restaurant.scss'
import Review from './Review'
// Variable hold yelp API data: 



//class component renders the restaurant information: 
//  form the creates review send rest ID and userId: 
///make fetch req to get reveiws: 

class Business extends React.Component {
    render() {


      return (
        <div className="Restaurant">
          <div className="image-container">
            <img src={this.props.restaurant.imageSrc} alt=''/>
          </div>
          <h2>{this.props.restaurant.name}</h2>
          <div className="Restaurant-information">
            <div className="Restaurant-address">
              <p>{this.props.restaurant.address}</p>
              <p>{this.props.restaurant.city}</p>
              <p>{`${this.props.restaurant.state} ${this.props.restaurant.zipCode}`}</p>
            </div>
            <div className="Restaurant-reviews">
              <h3>{this.props.restaurant.category.toUpperCase()}</h3>
              <h3 className="rating">{`${this.props.restaurant.rating} stars`}</h3>
              <p>{`${this.props.restaurant.reviewCount} reviews`}</p>
            </div>
          </div>
        <Review restaurantId ={this.props.restaurant.id}/>
        </div>
      );
    }
  }
  //use=Effect to quesry db for one restaurant: add review
  export default Business;


