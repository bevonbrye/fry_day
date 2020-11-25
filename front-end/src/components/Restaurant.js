import React, { useState } from 'react'
import './Restaurant.scss'

// Variable hold yelp API data: 

const restaurant = {

    imageSrc: 'https://https://imgur.com/XVdFqZ3.jpg',
    name: 'Frenchies',
    address: '42 wallaby way sydney',
    city: 'Flavortown',
    state: 'CA',
    zipCode: '95354',
    category: 'European',
    rating: 4.5,
    reviewCount: 90

}

//class component renders the restaurant information: 

const Restaurant = () => { 

    const [restaurant, setRestaurant] = useState(restaurant)
    
        return(
        <div className='Restaurant'>
            <div className='img-container'>
                <img src = 'https://https://imgur.com/XVdFqZ3.jpg'/>
            </div>
                <h2> Frenchies </h2>
                <div className ='Restaurant-info'>
                    <div className= 'Restaurant-address'>
                        <p> {restaurant.address}</p>
                        <p> {restaurant.city} </p>
                        <p> {restaurant.state} {restaurant.zipCode} </p>
                    </div>
                <div className='Yelp-review'>
                    <h3> {restaurant.category} </h3>
                    <h3 className='rating'> {restaurant.rating} </h3>
                    <p> {restaurant.reviewCount} </p>
                </div>
            </div>
        </div>
        )       
  }   


export default Restaurant