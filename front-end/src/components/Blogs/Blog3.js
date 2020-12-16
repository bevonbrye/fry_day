
import React from 'react';
import Blogs from './Blogs';

function Cards() {
  return (
    <div className='cards'>
      <h1>Fry Blog !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Blogs
              src='images/img-9.jpg'
              text=''
              label='Adventure'
              path='/services'
            />
            <Blogs
              src='images/img-2.jpg'
              text=''
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Blogs
              src='images/img-3.jpg'
              text=''
              label=''
              path='/services'
            />
            <Blogs
              src='images/img-4.jpg'
              text=''
              label=''
              path='/products'
            />
            <Blogs
              src='images/img-8.jpg'
              text=''
              label= ''
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;