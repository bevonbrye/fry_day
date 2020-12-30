import React from 'react';
import RestaurantList from '../components/RestaurantInfo/RestaurantList';
import Search from '../components/Search/Search'
import Yelp from '../models/yapiref/yapi2'
import BlogCards from '../components/Blogs/BlogCards'







class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        };

        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then(restaurants => {
            this.setState({ restaurants: restaurants || [] });
        });
    }

    render() {

        return ( 
          <div >
            <Search searchYelp = { this.searchYelp }/> 
            <RestaurantList restaurants = {this.state.restaurants }/> 
            <BlogCards/>
            </div>
        );
    }
}


export default Home;