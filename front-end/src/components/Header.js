import React from 'react';
// import { Link } from 'react-router-dom'
import './Header.scss'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'

const Header = (props) => {
  return (
    <header>


<Container>
            <Navbar expand="xl">
                <Navbar.Brand href="/">
                <Row>
                <Col style={{color:'black'}}>Fry Day </Col>
                    <img
                        alt=""
                        src="/img/fries.png"
                        width="25"
                        height="25"
                        className="d-inline-block align-top"
                    />{' '}
                    </Row>

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
                            <Nav.Link href='/About' style={{color:'black'}}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/Blog' style={{color:'black'}}>Blog</Nav.Link>
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
        </Container>

    </header>
  );
}

export default Header;
