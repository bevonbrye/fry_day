import React, { useState } from 'react'
import ReviewModel from '../models/review'
import Jumbotron from 'react-bootstrap/Jumbotron';


const Review = props => {
  const [review, setReview] = useState('');
 

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
          console.log('Successful register', data)
          props.history.push('/')
        })

  }

  return (
    <div> <Jumbotron>
      <h4>Leave a review</h4>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <input 
            onChange={ handleReview } 
            value={ review }
            type="text" 
            id="name" 
            name="name" 
            required
          />
          <h3> {props.text} </h3>
        </div>
 
        <button type="submit" style = {{borderRadius:'4px'}}>Leave Review</button>
      </form>
      </Jumbotron>
    </div>
  )
}

export default Review;