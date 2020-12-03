import React from 'react';

const Profile = props => {
  return (
    <h1>Hello, Welcome to your profile! { props.currentUser.name }</h1>
  )
}

export default Profile