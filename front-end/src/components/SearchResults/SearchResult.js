import React from 'react'
import { Container, Image, Col, Row, Card, ListGroup} from 'react-bootstrap'
import Rating from 'react-rating'




function SearchResult() {
    return (
        <div>

    <Container style={{marginTop:'1rem'}}>
        <Card style={{padding:'10px'}}>
            <Row>
           
                <Col> <Image src="https://via.placeholder.com/150" rounded /></Col>
                
                <Card style={{ width: '18rem', border:'none'}}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>  <h3> Company name </h3></ListGroup.Item>
                        <ListGroup.Item>Address</ListGroup.Item>
                        <ListGroup.Item style={{fontSize:'10px'}}> 

                        <p>Yelp Rating: 
                        <Rating style={{justifyContent:'space-between'}}
                            emptySymbol={<img src="images/star-empty.png" className="icon" />}
                            fullSymbol={<img src="/img/fries2.png" className="icon" />}
                            />
                        </p>
                        <p> total reviews</p>
                        
                         </ListGroup.Item>
                      
                    </ListGroup>
                    </Card>
                    
                
              
               
                
                
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            
            </Row>
        </Card>
    </Container>
        </div>
    )
}

export default SearchResult
