import React from 'react'
import "./RestaurantList.scss"
import Restaurant from './Restaurant'


class RestaurantList extends React.component{ 
    render() { 
        <div className= 'RestaurantList'>
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
        </div>
    }

}

export default RestaurantList;