import React from 'react'
import './Search.scss'
import {Row, Col} from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { useHistory } from "react-router-dom";





const sortByRestaurants = {
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}



class Search extends React.Component {

    constructor(props) { 
        super(props); 
        this.state = {
            term: 'fries',
            location: '',
            sortBy: 'best_match'
          };

          this.handleTermChange = this.handleTermChange.bind(this);
          this.handleLocationChange = this.handleLocationChange.bind(this);
          this.handleSearch = this.handleSearch.bind(this);
          this.handleSortByChange = this.handleSortByChange.bind(this);

          this.sortByRestaurant = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
          };
    }

    getSortByClass(sortByRestaurant){ 
        if(sortByRestaurant === this.state.sortBy) { 
            return 'active';
        }
            return '';
    }

    handleSortByChange(sortByRestaurant) { 
        this.setState({sortByRestaurant });
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
      }
    
    handleLocationChange(event) {
        this.setState({location: event.target.value});
      }
    
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    
        event.preventDefault();
      }

    renderSortByRestaurants() {
        return Object.keys(sortByRestaurants).map(sortByRestaurants => {
            let sortByRestaurantValue = sortByRestaurants[sortByRestaurants]; 
            return <li key = {sortByRestaurantValue} onClick={this.handleSortByChange.bind(this, sortByRestaurantValue)} className={this.getSortByClass(sortByRestaurantValue)}>  {sortByRestaurants} </li>
        })
    }

    render() { 
        return (
            <div className="SearchBar">

  <video src="/img/fdvid.mp4" autoPlay loop muted />
               <h2 style={{color:'white'}}> EVERYDAY IS FRYDAY! </h2>
               <p style={{color:'white'}}>The best website for french fry lovers.</p>
            {/* <Row> */}
            <Col>
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByRestaurants()}
                    </ul>
                </div>
                </Col>
                <Col>
                <div className="SearchBar-fields">
                    <input placeholder="Search By Restaurant" />
                    <input placeholder="Search By Location" onChange={this.handleLocationChange} />
                </div>
                </Col>
                
                <div className="SearchBar-submit">

                <a onClick={this.handleSearch}>Search</a>
                </div>
                {/* </Row>  */}
                {/* <video autoplay muted  id="bgvid">
                    <source src="/img/fdvid.mp4" type="video/mp4"/> 
                 </video> */}
                
            </div>          

        )
    }
}


export default Search;









// function Search(props) {
//   // set state to update input form  
//    const [location, setLocation] = useState(props.location || '')
//    let history = useHistory();
//    const urlEncodedLocation = encodeURI(location);

//    function handleSubmit(e){ 
//     history.push( `/Results?find_desc=fries&find_loc=${urlEncodedLocation}`);  
//     //never forget: if the event does not get explicitly handled, its default action should not be taken as it normally would be.
//      e.preventDefault();
//    } 
//     return (
//         <div>
//           {/* <Form inline style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
//       <FormControl name="Results" type="text" placeholder="Search by location" className="mr-sm-2" />
//       <Button  onSubmit={'/Results'} name="Results" variant="outline-success" >Search</Button>
//     </Form> */}

//          <form onSubmit={handleSubmit} className='SearchBar'> 
//               <input 
//               // called when user does something
//               onChange={(e) => setLocation(e.target.value)}
//               type="text" 
//               name="Results" 
//               placeholder="Search by location" />
//             <button onClick={handleSubmit} className='button'><FontAwesomeIcon icon={faSearch} /> </button>
//         </form>

        
        
//         </div>
//     )
// }



// search component that enables user to choose highest rated and reviews
// add favorite list when user is signed in 

