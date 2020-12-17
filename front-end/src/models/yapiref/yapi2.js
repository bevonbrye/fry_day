// import queryString from 'query-string';

const API_KEY = 'tNIyimuWUDLYKyxdk1P5Rh8q1-ksNLU88MnKz0EVQHBWGbg5s-AKyAX993YU0hFzsLZsM0MpTVfMKDzB-SXtddiifpxb2FRIzjNt7TNJJ6ejQXVjCuAeaciOQ3q1X3Yx'; // Insert API key here.

const Yelp = {

  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=3`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          // category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;



// function passes an obj and create a qs to use:

// export function get(path, queryParams) {
//     const query = queryString.stringify(queryParams);
//     return fetch(`${BASE_URL}${path}?${query}`, {
//         headers: {
//             Authorization: `Bearer ${BT}`,
//             Origin: 'localhost',
//             withCredentials: true,
//         }
//     });
// }