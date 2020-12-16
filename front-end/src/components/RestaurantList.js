import React from 'react'
import "./RestaurantList.scss"
import Restaurant from './Restaurant'
import { Row } from 'react-bootstrap';


class RestaurantList extends React.Component { 
    render(){
    return (

    <div className= 'RestaurantList'>
            <Row >
            
            {
                this.props.restaurants.map((restaurant) => {
                    // TODO give key to Rest component for correct order: 
                    return <Restaurant key = {restaurant.id} restaurant={restaurant}/>
                })
                
            }
            
            </Row>
        </div>
        );
    }
}


export default RestaurantList;