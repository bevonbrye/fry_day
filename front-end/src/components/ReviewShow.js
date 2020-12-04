// import React, { useEffect, useState } from 'react';
// import ReviewModel from '../models/review';


// const ReviewShow = (props) => {
//     const [reviews, setReviews] = useState([])

// //takes two params: callback depend list 

//   useEffect(() => { 
//     fetchData()
//   }, [] ) 
    
  
//   const fetchData = async () => {
//         const allReviews = await ReviewModel.show(props.restaurantId)
//         setReviews(allReviews)
//     }
  
//     return (
//       <div>          
//          <div className="image-wrap">
//             </div>
//             <ul>        
//                 {
//                 reviews.map((review) => {
//                     // TODO give key to Rest component for correct order: 
//                     return <li> {review.text}</li>
//                 })
//             }     
//             </ul>
//         </div>
//     );
  
// }

// export default ReviewShow;