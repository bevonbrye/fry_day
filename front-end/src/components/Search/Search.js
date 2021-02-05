import React from 'react'
import './Search.scss'
import {Col} from 'react-bootstrap'


/* ----- Class Componant------ */


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

          this.sortByRestaurants = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
          };
    }

    getSortByClass(sortByRestaurant){ 
        if(this.state.sortBy === sortByRestaurant ) { 
            return 'active';
        }
            return '';
    }

    handleSortByChange(sortByRestaurant) { 
        this.setState({sortBy: sortByRestaurant });
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
        return Object.keys(this.sortByRestaurants).map(sortByRestaurant => {
            let sortByRestaurantValue = this.sortByRestaurants[sortByRestaurant]; 
                return (<li className={this.getSortByClass(sortByRestaurantValue)}
                    key={sortByRestaurantValue} 
                    onClick={this.handleSortByChange.bind(this, sortByRestaurantValue)} >  
                    {sortByRestaurant} 
                </li>);
        })
    }

    render() { 
        return (
            <div className="SearchBar">
               <video src="/img/fdvid.mp4" autoPlay loop muted style={{position:'fixed'}} />
               <h2 style={{color:'black'}}>  EVERYDAY IS FRYDAY! </h2>
               <p style={{color:'black'}}>The best website for french fry lovers.</p>
               <Col>
                    <div className="SearchBar-sort-options">
                        <ul>
                            {this.renderSortByRestaurants()}
                        </ul>
                    </div>
               </Col>
               <Col>
                  <div className="SearchBar-fields">
                      <input placeholder="Search for Fries by Location..." onChange={this.handleLocationChange} />
                  </div>
               </Col>
                
                <div className="SearchBar-submit">
                  <a onClick={this.handleSearch}>Search</a>
                </div>  
            </div>          
        )
    }
}


export default Search;

/* <img
                            alt=""
                            src="/img/ogo2.png"
                            width="87"
                            height="77"
                            className="logo"
                        /> */
/*---------- Hooks ------------- */

// function Search (props) {

// const [location, setLocation] = useState(props.location || '')

   
//   //     state = {
//   //         term: 'fries',
//   //         location: '',
//   //         sortBy: 'best_match'
//   //       };

//   //       handleTermChange = handleTermChange.bind();
//   //       handleLocationChange = handleLocationChange.bind();
//   //       handleSearch = handleSearch.bind();
//   //       handleSortByChange = handleSortByChange.bind();

//   //       sortByRestaurant = {
//   //         'Best Match': 'best_match',
//   //         'Highest Rated': 'rating',
//   //         'Most Reviewed': 'review_count'
//   //       };
//   // }

// //  const getSortByClass = (sortByRestaurant) => { 
// //       if(sortByRestaurant === state.sortBy) { 
// //           return 'active';
// //       }
// //           return '';
// //   }

// //  const handleSortByChange = (sortByRestaurant) => { 
// //       setState({sortByRestaurant });
// //   }

// //  const  handleTermChange = (event) => {
// //       setState({term: event.target.value});
// //     }
  
//  const handleLocationChange = (event) =>  {
//       setLocation(event.target.value);

//     }
  
//  const handleSearch = (event) => {
//       props.searchYelp(location);
  
//       event.preventDefault();
//     }

//   // const renderSortByRestaurants = ()  => {
//   //     return Object.keys(sortByRestaurants).map(sortByRestaurants => {
//   //         let sortByRestaurantValue = sortByRestaurants[sortByRestaurants]; 
//   //         return <li key = {sortByRestaurantValue} onClick={handleSortByChange.bind( sortByRestaurantValue)} className={getSortByClass(sortByRestaurantValue)}>  {sortByRestaurants} </li>
//   //     })
//   // }


//       return (
//           <div className="SearchBar">
//              <video src="/img/fdvid.mp4" autoPlay loop muted />
//              <h2 style={{color:'black'}}>  EVERYDAY IS FRYDAY! </h2>
//              <p style={{color:'black'}}>The best website for french fry lovers.</p>
//              <Col>
//                   <div className="SearchBar-sort-options">
//                       <ul>
//                           {/* {renderSortByRestaurants()} */}
//                       </ul>
//                   </div>
//              </Col>
//              <Col>
//                 <div className="SearchBar-fields">
//                     <input placeholder="Search By Location" onChange={handleLocationChange} />
//                 </div>
//              </Col>
              
//               <div className="SearchBar-submit">
//                 <a href onClick={handleSearch}>Search</a>
//               </div>  
//           </div>          
//       )
// }


// export default Search;
