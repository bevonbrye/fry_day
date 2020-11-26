import React from 'react';
import './Search.scss'
import {Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function Search() {
    return (
      
        <div>
        
          <Form inline style={{display:'flex', justifyContent:'center', alignItems:'center'}} name="results">
      <FormControl type="text" placeholder="Search by location" className="mr-sm-2" />
      <Button  variant="outline-success" >Search</Button>
    </Form>
         <form className='SearchBar'> 
              <input type="text" name="name" placeholder="Search by location" />
            <button className='button'><FontAwesomeIcon icon={faSearch} /> </button>
        </form>
        </div>
    )
}



//search component that enables user to choose highest rated and reviews
//add favorite list when user is signed in 
// const sortByRestaurants = {
//     'Highest Rated': 'rating',
//     'Most Reviewed': 'review_count'
// }



// class Search extends React.Component {
//     renderSortByOptions() {
//         return Object.keys(sortByRestaurants).map(sortByRestaurants => {
//             let sortByRestaurantsValue = sortByRestaurants[sortByRestaurants]; 
//             return <li key = { sortByRestaurantsValue} >  {sortByRestaurants} </li>
//         })
//     }

//     render() { 
//         return (
//             <div className="SearchBar">
//                 <div className="SearchBar-sort-options">
//                     <ul>
//                         {this.renderSortByRestaurants}
//                     </ul>
//                 </div>
//                 <div className="SearchBar-fields">
//                     {/* <input placeholder="Search Businesses" /> */}
//                     <input placeholder="Search By Location?" />
//                 </div>
//                 <div className="SearchBar-submit">
//                     <a>Search</a>
//                 </div>
//             </div>          

//         )
//     }
// }

export default Search;