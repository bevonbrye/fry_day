import React from 'react';
import './Header.scss'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = (props) => {
  return (

<header>
            <Navbar expand='xl'>
               <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/img/milogo2.png"
                        width="87"
                        height="77"
                        className="logo"
                    />
                    {/*''*/}
                </Navbar.Brand> 
                <Navbar.Toggle  id="responsive-navbar-nav"/>
                <Navbar.Collapse style={{color:'white'}} id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    { props.currentUser ?
                    <>
                        <Nav.Item>
                            <Nav.Link href='/profile'> Profile</Nav.Link>
                        </Nav.Item>
                    
                        <Nav.Item>
                            <Nav.Link href="/logout" onClick={ props.logout } > Logout </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/About' style={{color:'white'}}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/Blog' style={{color:'white'}}>Blog</Nav.Link>
                        </Nav.Item>
                 
                    </>
                    :
                    <>
                         <Nav.Item>
                            <Nav.Link href='/login' style={{color:'black'}}>Sign in </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href='/register' style={{color:'black'}}>Sign up</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href='/About' style={{color:'black'}}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/Blog' style={{color:'black'}}>Blog</Nav.Link>
                        </Nav.Item>
                        
                    </>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        {/* </Container> */}
</header>
  );
}

export default Header;




{/* 
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
      </div>  */}




