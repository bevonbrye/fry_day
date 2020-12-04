import React, { useState, useEffect } from 'react'
import ReviewModel from '../models/review'


const Review = props => {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => { 
    fetchData()
  }, []) 
    
  
  const fetchData = async () => {
        const allReviews = await ReviewModel.show(props.restaurantId)
        setReviews(allReviews)
    }

  const handleReview = e => {
    setReview(e.target.value)
  }  

  const handleSubmit = e => {
    e.preventDefault()
    
      ReviewModel.create({ 
        text: review, 
        restaurantId: props.restaurantId
       })
        .then(data => {
          //adds new review to the review usestate 
          setReviews((curReviews) => [...curReviews, data.review] )
        })

  }

  const handleClick = id => { 
    ReviewModel.delete(id).then(data => {
          //adds new review to the review usestate 
          setReviews(reviews.filter(item => item.id !== id))
        })
  }
  return (
    <div> 

        <div className="image-wrap">
            <ul>        
                {
                reviews.map((review) => {
                    // TODO give key to Rest component for correct order: 
                    return (
                      <>

                      <li>
                     {review.text}
                     </li>
                          <button onClick={ ()=> handleClick(review.id)} style = {{borderRadius:'4px'}}> Delete </button>

                     </>
                     )
                })
            }     
            </ul>
        </div>  
      <h4>Leave a review</h4>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <input 
            onChange={ handleReview } 
            value={ review }
            type="text"
            required
          />
        </div>
        <button type="submit" style = {{borderRadius:'4px'}}>Leave Review</button>
      </form>
    </div>
  )
}

export default Review;