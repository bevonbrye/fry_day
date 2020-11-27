import React, {useState} from 'react'
import './Search.scss'
// import {Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";




function Search(props) {
  // create state into search to update input form  
  //  const [term, setTerm] = useState(props.term || '') //set to empty string because nothing has been passed 
   const [location, setLocation] = useState(props.location || '')
   let history = useHistory();
  const urlEncodedLocation = encodeURI(location);

   function handleSubmit(e){ 
    history.push( `/Results?find_loc=${urlEncodedLocation}`);  
    //never forget: if the event does not get explicitly handled, its default action should not be taken as it normally would be.
     e.preventDefault();
   } 
    return (
      
        <div>
        
          {/* <Form inline style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
      <FormControl name="Results" type="text" placeholder="Search by location" className="mr-sm-2" />
      <Button  onSubmit={'/Results'} name="Results" variant="outline-success" >Search</Button>
    </Form> */}

         <form onSubmit={handleSubmit} className='SearchBar'> 
              <input 
              // called when user does something
              onChange={(e) => setLocation(e.target.value)}
              type="text" 
              name="Results" 
              placeholder="Search by location" />
            <button onClick={handleSubmit} className='button'><FontAwesomeIcon icon={faSearch} /> </button>
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