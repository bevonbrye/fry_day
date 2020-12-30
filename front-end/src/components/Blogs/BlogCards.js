
import React from 'react';
import BlogItems from './BlogItems';
import './BlogCards.scss'

function Cards() {
  return (
    <div className='cards'>
      <h2 style={{color:'lightGrey', marginTop:'-2rem'}}> Featured</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <BlogItems
              src='/img/fries2.jpeg'
              text='Many of you already know, but I’d thought I’d give a shout out here, after all, I’m not shy. I was recently the Featured Blogger at Philly Grub. You can read the interview here.'
              label='Featured Blogger at PhillyGrub - Philly Grub'
              path exact ='/https://phillygrub.blog/2015/03/16/philly-food-bloggers/'
            />
            <BlogItems
              src='/img/fryBlog.jpeg'
              text="You could just do two types, like half shoe-string fries and half sweet potato fries, but that's nothing special because you could get it anywhere, Gim said. I think three to five types of fries just makes it more interesting to look at."
              label='The french fry boar is the new cheese plate. Here is how to make your own Instagram-worthy version at home.'
              path='/Blog'
            />
          </ul>
          <ul className='cards__items'>
            <BlogItems
              src='/img/fryblog2.jpg'
              text='Even the best of fries can be a little dull and lifeless on their own. With a few simple additions, you can liven up a plain side dish, create a brand new appetizer, or even whip up a unique dessert that is perfect for your guests to share as a group.'
              label='4 Fancy French Fry Creations'
              path='/'
            />
            <BlogItems
              src='/img/fryblog3.jpg'
              text='Nobody makes fries the old way anymore. They used to be so good. These days—phhht. There’s no taste at all. But everybody got afraid of the health stuff, so it’s all vegetable oil now.'
              label='Tossed in Flavor'
              path='/'
            />
            <BlogItems
              src='/img/fryblog4.jpg'
              text='Sometimes, in the age of avocado toast and unicorn Frappuccinos, where I can’t tell a Whole Foods reality from a Whole Foods parody anymore and sushi — the ’90s most exotic cuisine — is considered basic, I begin to fear that we’ve lost our culinary priorities.'
              label= '20 Truths About French Fries'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;