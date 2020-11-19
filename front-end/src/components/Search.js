import React from 'react';
import 'search.scss'


//search component that enables user to choose highest rated and reviews
//add favorite list when user is signed in 
const sortByRestaurants = {
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}



class Search extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByRestaurants).map(sortByRestaurants => {
            let sortByRestaurantsValue = sortByRestaurants[sortByRestaurants]; 
            return <li key = { sortByRestaurantsValue} >  {sortByRestaurants} </li>
        })
    }

    render() { 
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByRestaurants}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    {/* <input placeholder="Search Businesses" /> */}
                    <input placeholder="Search By Location?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Search</a>
                </div>
            </div>          

        )
    }
}

export default Search;