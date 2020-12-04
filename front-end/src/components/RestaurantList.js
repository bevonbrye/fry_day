import React from 'react'
import "./Restaurant.scss"
import Restaurant from './Restaurant'


class RestaurantList extends React.Component { 
    render(){
    return (
    <div className= 'RestaurantList'>
            {
                this.props.restaurants.map((restaurant) => {
                    // TODO give key to Rest component for correct order: 
                    return <Restaurant key = {restaurant.id} restaurant={restaurant}/>
                })
                
            }
        </div>
        );
    }
}


export default RestaurantList;