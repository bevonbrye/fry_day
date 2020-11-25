import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}> logo goes here </Link>
      </div>
      <div className="links">
        <ul>
          { props.currentUser ? 
            <>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
            </>
          :
            <>
              <li><Link to={'/login'}>Login</Link></li>
              <li><Link to={'/About'}>About</Link></li>
              <button><Link to={'/register'}>Sign-up</Link></button>

            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
