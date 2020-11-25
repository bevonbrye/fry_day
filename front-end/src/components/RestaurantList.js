import React from 'react'
import "./RestaurantList.scss"
import Restaurant from './Restaurant'


const RestaurantList = (props) => { 
    return (
    <div className= 'RestaurantList'>
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
        </div>
    )

}

export default RestaurantList;